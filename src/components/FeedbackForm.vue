<template>
  <div class="max-w-4xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
    <h2 class="text-3xl font-bold mb-8 text-center">Отправьте ваши данные — мы вам перезвоним</h2>
    <form
      @submit.prevent="handleSubmit"
      class="w-full flex flex-wrap md:flex-nowrap gap-4 items-stretch"
    >
      <input
        v-model="form.name"
        type="text"
        required
        placeholder="Ваше имя"
        class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="Email"
        class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <input
        v-model="form.message"
        required
        placeholder="Телефон или сообщение"
        class="flex-1 min-w-[180px] border border-gray-200 rounded-xl px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="submit"
        class="flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow"
        style="height: auto;"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);
        formData.append('message', this.form.message);

        const response = await fetch('/api-feedback', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          alert('Сообщение успешно отправлено!');
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } else {
          alert('Ошибка: ' + (result.error || 'Неизвестная ошибка'));
        }
      } catch (error) {
        console.error('Ошибка отправки:', error);
        alert('Ошибка сети. Попробуйте еще раз.');
      }
    }
  }
}
</script>