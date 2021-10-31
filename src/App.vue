<template>
  <section>
    <pre class="note">App</pre>

    <div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/products">Products</router-link>
      |
      <router-link to="/cart">Cart</router-link>
    </div>

    <router-view />
  </section>
</template>

<style>
section {
  position: relative;
  padding-top: 1em;
}
.note {
  color: steelblue;
  font-style: italic;
  position: absolute;
  right: 0;
}
</style>
