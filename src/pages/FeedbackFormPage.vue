<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <FeedbackForm title="Форма обратной связи" tag="feedback-form" />
  </div>
</template>

<script>
import FeedbackForm from '../components/FeedbackForm.vue'

export default {
  name: 'FeedbackFormPage',
  components: {
    FeedbackForm
  }
}
</script> 