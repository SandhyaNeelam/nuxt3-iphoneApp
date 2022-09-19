<template>
  <div>
    <p>Welcome to profile</p>
    <slot></slot>
  </div>

  <!-- <NuxtLink to="/">Home</NuxtLink> -->
</template>

<script>
definePageMeta({
  layout: "sidebar",
  //inline middleware
  middleware: ["auth"],
});
</script>
