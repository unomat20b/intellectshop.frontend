# IntellectShop Frontend

IntellectShop Frontend — это одностраничное приложение (SPA) на Vue 3 + Vite, предназначенное для работы с сайтом на MODX (intellectshop.net), который выступает как API и админка для каталога.

## Структура проекта

- `src/` — исходный код приложения:
  - `pages/` — основные страницы (Главная, Услуги, О нас, Проекты, Каталог)
    - `services/` — вложенные страницы услуг (AI, Apple, Audit и др.)
  - `components/` — переиспользуемые компоненты
  - `api/` — взаимодействие с MODX API (через Axios)
  - `router/` — маршрутизация (Vue Router)
  - `assets/` — статические ресурсы
- `public/` — публичные файлы
- `dist/` — папка для production-сборки (заливается на хостинг)
- Конфиги: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
- Используются: Tailwind CSS, Vue Router, Axios

## Запуск и сборка

```bash
npm install        # установка зависимостей
npm run dev        # запуск dev-сервера (локальная разработка)
npm run build      # production-сборка (файлы в dist/)
npm run preview    # предпросмотр production-сборки
```

## Особенности

- В режиме dev работает локально для тестов.
- В режиме build собирается для деплоя на хостинг (dist/).
- Магазин временно отключён, но реализованы страницы услуг.

## Рекомендации по улучшению

1. **Автоматизация деплоя (CI/CD)**  
   Настроить автоматическую сборку и деплой dist/ на сервер (например, через GitHub Actions или другой pipeline), чтобы не копировать файлы вручную через FTP.
2. **.env файлы**  
   Все чувствительные данные (API-ключи, адреса) вынести в .env и не коммитить в git.
3. **Документация**  
   Расширить README: добавить описание структуры src, примеры API-запросов, описание роутинга и компонентов.
4. **Линтинг и форматирование**  
   Добавить ESLint/Prettier для единообразия кода.
5. **Unit-тесты**  
   Подумать о добавлении unit-тестов (например, с Vitest или Jest) для повышения надёжности кода.
6. **Оптимизация ассетов**  
   Проверить, не попадают ли лишние файлы в dist (например, исходники, которые не нужны на проде).
7. **SEO и мета-теги**  
   Использовать @vueuse/head для динамических мета-тегов на страницах.

---

Если есть вопросы или предложения по развитию проекта — см. раздел Issues или обратись к мейнтейнеру.

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