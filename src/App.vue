<template>
  <section>
    <pre class="note">App</pre>

    <TopNav></TopNav>

    <router-view />
  </section>
</template>

<script>
  import TopNav from './components/TopNav.vue';

  export default {
    components: { TopNav },
  };
</script>

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
