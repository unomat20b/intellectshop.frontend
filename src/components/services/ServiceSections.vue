<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  sections: {
    type: Array,
    required: true,
  },
})

function groupHeadingTag(section) {
  return section?.title ? 'h3' : 'h2'
}

function groupHeadingClass(section) {
  return section?.title
    ? 'text-xl font-semibold mb-2 mt-6'
    : 'text-2xl font-semibold mb-4'
}
</script>

<template>
  <div class="space-y-10">
    <section
      v-for="(section, sectionIndex) in sections"
      :key="section.title || `section-${sectionIndex}`"
    >
      <h2
        v-if="section.title"
        class="text-2xl font-semibold mb-4"
      >
        {{ section.title }}
      </h2>

      <div class="space-y-6">
        <div
          v-for="(group, groupIndex) in section.groups"
          :key="group.title || `${sectionIndex}-${groupIndex}`"
        >
          <component
            :is="groupHeadingTag(section)"
            :class="groupHeadingClass(section)"
          >
            {{ group.title }}
          </component>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink
              v-for="item in group.items"
              :key="item.to"
              :to="item.to"
              class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <h4 class="font-medium">
                {{ item.title }}
              </h4>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
