<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">IntellectShop Frontend</h1>
    <nav class="mb-4">
      <router-link class="mr-4 text-blue-500 underline" to="/">Home</router-link>
      <router-link class="text-blue-500 underline" to="/catalog">Catalog</router-link>
    </nav>
    <router-view />
  </div>
</template>
