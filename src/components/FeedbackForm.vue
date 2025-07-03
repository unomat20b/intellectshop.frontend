<template>
  <div :class="[small ? 'small-form' : 'bg-white py-12']">
    <div class="max-w-6xl mx-auto px-4">
      <div :class="[small ? 'bg-slate-50 rounded-3xl shadow-2xl p-4' : 'bg-slate-50 rounded-3xl shadow-2xl p-8', 'flex flex-col gap-8']">
        <h2 :class="[small ? 'text-2xl mt-8 mb-2 text-left' : 'text-3xl mb-8 text-center', 'font-bold']">{{ title }}</h2>
        <form
          @submit.prevent="handleSubmit"
          class="w-full flex flex-col gap-4 items-stretch"
        >
          <!-- Сообщение/телефон -->
          <textarea
            v-model="form.message"
            required
            placeholder="Телефон или сообщение"
            class="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg min-h-[80px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-y mb-2"
          />
          <!-- Имя и email -->
          <div class="flex flex-col md:flex-row gap-4">
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
          </div>
          <!-- Кнопка -->
          <button
            type="submit"
            class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow mt-2"
            style="height: auto;"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  props: {
    title: {
      type: String,
      default: 'Оставьте свои данные и мы свяжемся с вами'
    },
    tag: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
  },
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
        formData.append('tag', this.tag);

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