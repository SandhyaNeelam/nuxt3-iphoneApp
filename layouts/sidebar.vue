<template>
  <main class="user-layout bg-gray-100">
    <article class="sidebar">
      <p>Name: IphoneUser</p>
      <p>Email: eve.holt@reqres.in</p>
      <p>Password: cityslicka</p>
    </article>
  </main>

  <section>
    <slot></slot>
  </section>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
.user-layout {
  display: flex;
}
</style>
