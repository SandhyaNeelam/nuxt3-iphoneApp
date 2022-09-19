<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <!-- <nuxt-link
      to="/iphone/iphone-12"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>Iphone 12</h1>
      <div class="flex justify-center">
        <img width="200" src="/images/iphone12.webp" alt="" />
      </div>
    </nuxt-link> -->
    <!-- <nuxt-link to="/iphone/iphone-12-pro" class="shadow-lg text-center">
      <h1>Iphone 12 Pro</h1>
      <div class="flex justify-center">
        <img width="200" src="/images/iphone12-pro.webp" alt="" />
      </div>
    </nuxt-link> -->
    <!-- <nuxt-link to="/iphone/iphone-13" class="shadow-lg text-center">
      <h1>Iphone 13</h1>
      <div class="flex justify-center">
        <img width="200" src="/images/iphone13.webp" alt="" />
      </div>
    </nuxt-link> -->
    <!-- <nuxt-link to="/iphone/iphone-13-pro" class="shadow-lg text-center">
      <h1>Iphone 13 Pro</h1>
      <div class="flex justify-center">
        <img width="200" src="/images/iphone13-pro.webp" alt="" />
      </div>
    </nuxt-link> -->
    <nuxt-link
      v-for="iphone in iphones"
      :key="iphone"
      :to="`/iphone/${iphone}`"
      class="shadow-lg text-center"
    >
      <h1>{{ iphone }}</h1>
      <div class="flex justify-center">
        <img width="200" :src="`/images/${iphone}.webp`" alt="" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
useHead({
  title: "Iphones",
});

const iphones = ["iphone12", "iphone12-pro", "iphone13", "iphone13-pro"];

//api route
// const { data } = useFetch("/api/iphones");
// console.log("+++++++++++++++++++++++++++++++++", data.value);
// const iphones = data;

//routes
// const { data } = useFetch("/iphones");
// console.log("+++++++++++++++++++++++++++++++++", data.value);
// const iphones = data.value;
</script>
