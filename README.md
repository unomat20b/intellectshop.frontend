# IntellectShop Frontend

This project is a Vue 3 + Vite application. It is intended to connect to the `intellectshop.net` MODX site which acts as an API and admin for the catalog.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The application uses Tailwind CSS and Vue Router. API calls are performed with Axios and can be found in `src/api/modx.js`.

npm run dev start localhost

1.	В любой ветке (например, dev)
➤ npm run dev
➤ проверяешь локально
2.	Всё работает →
➤ git commit
➤ git push origin main
3.	GitHub Actions:
➤ билдит
➤ деплоит только dist/
➤ MODX не трогает