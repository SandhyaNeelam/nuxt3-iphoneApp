<template>
  <div>
    <nav
      class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between"
    >
      <!-- <NuxtLink to="/about">About</NuxtLink> -->
      <div class="flex">
        <NuxtLink class="mr-4" to="/">Home</NuxtLink>
        <NuxtLink class="mr-4" to="/iphone">Iphones</NuxtLink>
        <p>Cart({{ cart.length }})</p>
        <p class="mr-4">Total Route Changed: {{ pageVisitCount }}</p>
      </div>

      <div v-if="auth.isAuthenticated">
        <NuxtLink to="/profile">Profile</NuxtLink>
        <button class="ml-4" @click="logout">Logout</button>
      </div>
      <NuxtLink v-else to="/login">LogIn</NuxtLink>

      <!-- <p>{{ auth.isAuthenticated }}</p> -->
    </nav>
  </div>
</template>

<script setup>
const cart = useCart();
console.log(cart.value.length);

const auth = useAuth();
const pageVisitCount = usePageVisitCount();

function logout() {
  auth.value.isAuthenticated = false;
}
</script>
