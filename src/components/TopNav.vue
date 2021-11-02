<template>
  <nav class="flex start">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">Cart</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    background-color: #eee;
    display: flex;
    width: 100%;

    a {
      color: gray;
      padding: 0.5rem 1rem;
      text-decoration: none;
      text-transform: uppercase;

      &.router-link-exact-active {
        border-bottom: 2px solid steelblue;
        color: steelblue;
      }
    }
  }
</style>
