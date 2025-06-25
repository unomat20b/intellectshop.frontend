<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Интеграция с Google Workspace и Notion – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Обучение интеграции нейросетей с Google Workspace, Notion, Airtable и другими рабочими инструментами.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Интеграция с Google Workspace и Notion</h1>

    <p class="text-gray-700 mb-4">
      Хотите, чтобы нейросети понимали вашу внутреннюю документацию и помогали в рутинных задачах? На этом курсе вы научитесь подключать ИИ к рабочим пространствам — от Google Docs до Airtable — и использовать это для реальной автоматизации.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Подключение аккаунтов Google / Notion / Airtable к AI-агентам</li>
      <li>Работа с API Google Docs, Google Sheets и Calendar</li>
      <li>Интеграция с базами данных: поиск, редактирование, генерация записей</li>
      <li>Сценарии взаимодействия с документами через Telegram-бота или Web-интерфейс</li>
      <li>Создание внутренних чат-ассистентов для поиска по документам</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типичные проблемы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Непонимание, как дать ИИ доступ к нужным документам</li>
      <li>Ошибки в настройке API-ключей и OAuth</li>
      <li>Сложности с поиском информации по структуре базы</li>
      <li>Слишком общий ассистент, не учитывающий специфику компании</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      Вы научитесь делать «умных» агентов, которые умеют работать с Google Workspace и Notion как живой помощник. Это даст реальную выгоду: ускорит поиск данных, снизит нагрузку на сотрудников и выведет работу с файлами на новый уровень.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>RAG с Google Drive:</strong> можно подключить ваши папки напрямую и получить чат-бота, отвечающего по содержимому документов в реальном времени.</li>
      <li><strong>Сводка по расписанию:</strong> GPT может собрать все встречи из календаря, выписать задачи и автоматически отправить в Telegram.</li>
    </ul>

    <p class="text-gray-700 italic">
      Используйте силу нейросетей там, где они действительно полезны — внутри вашего рабочего пространства. Это самый короткий путь к настоящей автоматизации.
    </p>
  </section>
</template>