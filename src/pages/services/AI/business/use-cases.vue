<script>
import { useHead } from '@vueuse/head'

export default {
  serviceTitle: "Выбор точек применения AI",
  serviceDescription: "Как определить, где в бизнесе выгодно использовать нейросети. Методика анализа и подбор инструментов.",
  setup() {
    useHead({
      title: 'Выбор точек применения AI – IntellectShop',
      meta: [
        {
          name: 'description',
          content: 'Как определить, в каких процессах бизнесу действительно выгодно использовать нейросети. Методика анализа и подбор инструментов.',
        },
      ],
    })
  }
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Выбор точек применения AI</h1>

    <p class="text-gray-700 mb-4">
      Не все задачи требуют внедрения нейросетей, но правильно выбранные области могут дать резкий рост эффективности. На этом тренинге вы научитесь выявлять процессы, где AI принесёт реальную выгоду, и подбирать подходящие технологии под каждую цель.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Анализ текущих процессов на предмет автоматизации</li>
      <li>Методика выявления "узких горлышек" и рутинных задач</li>
      <li>Оценка потенциального ROI от внедрения AI</li>
      <li>Классификация задач: генерация, анализ, автоматизация</li>
      <li>Подбор инструментов: GPT, Claude, Mistral, локальные LLM</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типичные ситуации в бизнесе</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Ручная сортировка обращений, писем, заявок</li>
      <li>Сотрудники тратят много времени на поиск информации</li>
      <li>Много однотипных коммуникаций с клиентами</li>
      <li>Отчёты, шаблоны, ответы составляются вручную</li>
      <li>Сложно найти документы, файлы, истории проектов</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      Вы научитесь видеть, где именно AI может усилить ваш бизнес. Сможете обосновывать внедрение перед командой или руководством и подбирать подходящие решения под задачи: от генерации писем до автоматизации обработки входящих запросов.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по выбору кейсов</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>AI ≠ вся работа:</strong> внедряйте нейросеть не вместо человека, а в качестве помощника — она усиливает, а не заменяет.</li>
      <li><strong>Начинайте с повторяющегося:</strong> если задача выполняется по шаблону или скрипту — это идеальный кандидат для AI.</li>
    </ul>

    <p class="text-gray-700 italic">
      Правильный выбор точек внедрения — это 80% успеха. Не нужно автоматизировать всё — начните с самого "болезненного", и результат не заставит себя ждать.
    </p>
  </section>
</template>