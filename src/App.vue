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

<style lang="scss">
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
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;

    > [cols] {
      border: 1px solid silver;
      padding: 1em;
    }
    > [cols='2'] {
      width: 50%;
    }
    > [cols='3'] {
      width: 33%;
    }
    > [cols='4'] {
      width: 25%;
    }
  }
</style>
