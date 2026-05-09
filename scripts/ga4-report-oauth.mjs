import fs from 'node:fs'
import http from 'node:http'
import { URL } from 'node:url'
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import dotenv from 'dotenv'
import { google } from 'googleapis'

dotenv.config({ path: '.env.local' })
dotenv.config()

const propertyId = process.env.GA4_PROPERTY_ID
const days = Number(process.env.GA4_LOOKBACK_DAYS || 7)
const credentialsFile = process.env.GA4_OAUTH_CLIENTS_FILE || './ga4-oauth-client.json'
const tokenFile = process.env.GA4_OAUTH_TOKEN_FILE || './.ga4-oauth-token.json'
const redirectUri = process.env.GA4_OAUTH_REDIRECT_URI || 'http://127.0.0.1:8787/oauth2callback'

if (!propertyId) {
  console.error('Missing GA4_PROPERTY_ID (numeric GA4 property id, e.g. 123456789)')
  process.exit(1)
}

if (!fs.existsSync(credentialsFile)) {
  console.error(`OAuth client file not found: ${credentialsFile}`)
  console.error('Download Desktop OAuth credentials JSON from Google Cloud and set GA4_OAUTH_CLIENTS_FILE')
  process.exit(1)
}

const raw = JSON.parse(fs.readFileSync(credentialsFile, 'utf8'))
const oauthClient = raw.installed || raw.web
if (!oauthClient?.client_id || !oauthClient?.client_secret) {
  console.error('Invalid OAuth credentials file: expected installed/web.client_id and client_secret')
  process.exit(1)
}

const oauth2Client = new google.auth.OAuth2(
  oauthClient.client_id,
  oauthClient.client_secret,
  redirectUri
)

const SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']

async function authorize() {
  if (fs.existsSync(tokenFile)) {
    const token = JSON.parse(fs.readFileSync(tokenFile, 'utf8'))
    oauth2Client.setCredentials(token)
    return
  }

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  })

  console.log('\nOpen this URL in browser and authorize:')
  console.log(authUrl)
  console.log('')

  const code = await getCodeFromRedirectOrPrompt()
  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)
  fs.writeFileSync(tokenFile, JSON.stringify(tokens, null, 2))
  console.log(`Saved OAuth token to ${tokenFile}`)
}

async function getCodeFromRedirectOrPrompt() {
  return new Promise((resolve) => {
    const uri = new URL(redirectUri)

    if (uri.hostname !== '127.0.0.1' && uri.hostname !== 'localhost') {
      manualCodePrompt(resolve)
      return
    }

    const server = http.createServer(async (req, res) => {
      const reqUrl = new URL(req.url || '/', redirectUri)
      if (reqUrl.pathname !== uri.pathname) {
        res.statusCode = 404
        res.end('Not found')
        return
      }

      const code = reqUrl.searchParams.get('code')
      if (!code) {
        res.statusCode = 400
        res.end('Missing code')
        return
      }

      res.end('Authorization received. You can close this tab.')
      server.close()
      resolve(code)
    })

    server.listen(Number(uri.port || 80), uri.hostname, () => {
      console.log(`Waiting OAuth callback on ${redirectUri}`)
      console.log('If callback does not arrive in 90s, we will ask for manual code.')
      setTimeout(() => manualCodePrompt(resolve, server), 90_000)
    })

    server.on('error', () => {
      manualCodePrompt(resolve)
    })
  })
}

let manualResolved = false
async function manualCodePrompt(resolve, server) {
  if (manualResolved) return
  manualResolved = true

  const rl = readline.createInterface({ input, output })
  const code = (await rl.question('Paste OAuth code here: ')).trim()
  await rl.close()
  if (server) server.close()
  resolve(code)
}

async function runReport() {
  const analyticsData = google.analyticsdata({ version: 'v1beta', auth: oauth2Client })

  const response = await analyticsData.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          inListFilter: { values: ['/', '/about/', '/services/'] }
        }
      },
      metricAggregations: ['TOTAL'],
      keepEmptyRows: true,
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }]
    }
  })

  const rows = response.data.rows || []
  const totals = response.data.totals?.[0]?.metricValues || []

  console.log(`\nGA4 OAuth report for last ${days} day(s) on property ${propertyId}`)
  console.log('Pages: /, /about/, /services/\n')

  if (!rows.length) {
    console.log('No rows returned yet. This can be normal right after GA setup.')
  } else {
    for (const row of rows) {
      const path = row.dimensionValues?.[0]?.value || '(unknown)'
      const views = row.metricValues?.[0]?.value || '0'
      const users = row.metricValues?.[1]?.value || '0'
      const events = row.metricValues?.[2]?.value || '0'
      console.log(`${path.padEnd(12)} views=${views} users=${users} events=${events}`)
    }
  }

  if (totals.length) {
    console.log(`\nTOTAL        views=${totals[0]?.value || '0'} users=${totals[1]?.value || '0'} events=${totals[2]?.value || '0'}`)
  }

  const keyEvents = await analyticsData.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: { values: ['generate_lead', 'page_view'] }
        }
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }]
    }
  })

  console.log('\nKey events:')
  for (const row of keyEvents.data.rows || []) {
    const eventName = row.dimensionValues?.[0]?.value || '(unknown)'
    const count = row.metricValues?.[0]?.value || '0'
    console.log(`${eventName.padEnd(14)} count=${count}`)
  }
}

const main = async () => {
  await authorize()
  await runReport()
}

main().catch((error) => {
  const message = error?.response?.data?.error?.message || error?.message || String(error)
  console.error('GA4 OAuth error:', message)
  process.exit(1)
})
