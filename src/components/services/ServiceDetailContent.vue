<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  content: {
    type: Object,
    required: true,
  },
})

function isExternalUrl(value) {
  return /^https?:\/\//.test(String(value || ''))
}

function actionComponent(action) {
  return isExternalUrl(action?.to) ? 'a' : RouterLink
}

function actionProps(action) {
  if (isExternalUrl(action?.to)) {
    return {
      href: action.to,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return {
    to: action?.to || '/',
  }
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">{{ content.hero.title }}</h1>

    <p
      v-if="content.hero.lead"
      class="text-gray-700 mb-4"
    >
      {{ content.hero.lead }}
    </p>

    <section
      v-for="(section, sectionIndex) in content.sections"
      :key="section.title || `section-${sectionIndex}`"
      class="mb-6"
    >
      <h2 class="text-lg font-semibold mb-2">{{ section.title }}</h2>

      <p
        v-for="(paragraph, paragraphIndex) in section.paragraphs || []"
        :key="`paragraph-${sectionIndex}-${paragraphIndex}`"
        class="text-gray-700 mb-4"
      >
        {{ paragraph }}
      </p>

      <ul
        v-if="section.list?.length"
        class="list-disc pl-5 text-gray-700 mb-6 space-y-1"
      >
        <li
          v-for="(item, itemIndex) in section.list"
          :key="`item-${sectionIndex}-${itemIndex}`"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section
      v-if="content.faq?.length"
      class="mb-8"
    >
      <h2 class="text-lg font-semibold mb-3">Частые вопросы</h2>
      <div class="space-y-4">
        <article
          v-for="(entry, entryIndex) in content.faq"
          :key="entry.question || `faq-${entryIndex}`"
          class="rounded-lg border border-slate-200 bg-white p-4"
        >
          <h3 class="font-semibold text-slate-900 mb-1">{{ entry.question }}</h3>
          <p class="text-sm text-slate-700">{{ entry.answer }}</p>
        </article>
      </div>
    </section>

    <section
      v-if="content.cta"
      class="rounded-xl border border-slate-200 bg-slate-50 p-5 mb-6"
    >
      <h2 class="text-lg font-semibold mb-2">{{ content.cta.title }}</h2>
      <p class="text-sm text-slate-700 mb-4">{{ content.cta.text }}</p>
      <div class="flex flex-wrap gap-3">
        <component
          :is="actionComponent(content.cta.primary)"
          v-bind="actionProps(content.cta.primary)"
          class="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
        >
          {{ content.cta.primary.label }}
        </component>
        <component
          v-if="content.cta.secondary"
          :is="actionComponent(content.cta.secondary)"
          v-bind="actionProps(content.cta.secondary)"
          class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
        >
          {{ content.cta.secondary.label }}
        </component>
      </div>
    </section>

    <p
      v-if="content.outro"
      class="text-gray-700 italic"
    >
      {{ content.outro }}
    </p>
  </section>
</template>
