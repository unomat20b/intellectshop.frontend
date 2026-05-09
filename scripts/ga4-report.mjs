import { google } from 'googleapis'
import dotenv from 'dotenv'
import fs from 'node:fs'

dotenv.config({ path: '.env.local' })
dotenv.config()

const propertyId = process.env.GA4_PROPERTY_ID
const credentialsRaw = process.env.GA4_SERVICE_ACCOUNT_JSON
const credentialsFile = process.env.GA4_SERVICE_ACCOUNT_FILE
const days = Number(process.env.GA4_LOOKBACK_DAYS || 7)

if (!propertyId) {
  console.error('Missing GA4_PROPERTY_ID (numeric GA4 property id, e.g. 123456789)')
  process.exit(1)
}

if (!credentialsRaw && !credentialsFile) {
  console.error('Missing credentials. Set GA4_SERVICE_ACCOUNT_JSON or GA4_SERVICE_ACCOUNT_FILE')
  process.exit(1)
}

let credentials
if (credentialsFile) {
  try {
    credentials = JSON.parse(fs.readFileSync(credentialsFile, 'utf8'))
  } catch {
    console.error('GA4_SERVICE_ACCOUNT_FILE is not readable or not valid JSON')
    process.exit(1)
  }
} else {
  try {
    credentials = JSON.parse(credentialsRaw)
  } catch {
    console.error('GA4_SERVICE_ACCOUNT_JSON is not valid JSON')
    process.exit(1)
  }
}

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/analytics.readonly']
})

const analyticsData = google.analyticsdata({ version: 'v1beta', auth })

const run = async () => {
  const response = await analyticsData.properties.runReport({
    property: `properties/${propertyId}`,
    requestBody: {
      dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
        { name: 'eventCount' }
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          inListFilter: {
            values: ['/', '/about/', '/services/']
          }
        }
      },
      metricAggregations: ['TOTAL'],
      keepEmptyRows: true,
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }]
    }
  })

  const rows = response.data.rows || []
  const totals = response.data.totals?.[0]?.metricValues || []

  console.log(`GA4 report for last ${days} day(s) on property ${propertyId}`)
  console.log('Pages: /, /about/, /services/')
  console.log('')

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
    console.log('')
    console.log(`TOTAL        views=${totals[0]?.value || '0'} users=${totals[1]?.value || '0'} events=${totals[2]?.value || '0'}`)
  }

  const leads = await analyticsData.properties.runReport({
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

  console.log('')
  console.log('Key events:')
  for (const row of leads.data.rows || []) {
    const eventName = row.dimensionValues?.[0]?.value || '(unknown)'
    const count = row.metricValues?.[0]?.value || '0'
    console.log(`${eventName.padEnd(14)} count=${count}`)
  }
}

run().catch((error) => {
  const message = error?.response?.data?.error?.message || error?.message || String(error)
  console.error('GA4 API error:', message)
  process.exit(1)
})
