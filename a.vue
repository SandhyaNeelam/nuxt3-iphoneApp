<template>
  <a @click="view('home')">Home</a>
  <a @click="view('counter')">Counter</a>
  <!-- <button @click="toggle">Toggle</button> -->
  <NuxtPage />

  <HomeWelcome v-if="page === 'home'" />

  <Counter v-if="page === 'counter'" />
  <!-- <component :is="MyComponent" /> -->
</template>

<script setup>
const page = ref("home");
function view(name) {
  page.value = name;
}
</script>
