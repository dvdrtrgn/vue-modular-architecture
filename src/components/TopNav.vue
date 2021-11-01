<template>
  <div class="flex">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/products">Products</router-link>
    |
    <router-link to="/cart">Cart</router-link>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>
