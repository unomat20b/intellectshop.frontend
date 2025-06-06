<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">IntellectShop</h1>

    <nav class="mb-4 space-x-4">
      <router-link class="text-blue-500 underline" to="/">Home</router-link>
      <router-link class="text-blue-500 underline" to="/catalog">Catalog</router-link>
      <router-link class="text-blue-500 underline" to="/services">Services</router-link>
      <router-link class="text-blue-500 underline" to="/projects">Projects</router-link>
      <router-link class="text-blue-500 underline" to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>