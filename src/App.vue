<template>
  <main>
    <TopNav></TopNav>

    <router-view />
  </main>
</template>

<script>
  import TopNav from './components/TopNav.vue';

  export default {
    components: { TopNav },
  };
</script>

<style lang="scss">
  html {
    font-size: 14px;
  }
  body {
    font-family: 'Lucida Grande', sans-serif;
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }
  main > section {
    position: relative;
    padding: 1rem;
  }
  .btn {
    appearance: none;
    border: 0;
    border-radius: 3px;
    background-color: #eee;
    color: black;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }
  .m1 {
    margin: 0.5rem;
  }
  .p1 {
    padding: 0.5rem;
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
    justify-content: space-between;
    width: 100%;
    &.end {
      justify-content: flex-end;
    }
    &.start {
      justify-content: flex-start;
    }

    > [cols] {
      margin-bottom: 1rem;
      width: 33%;

      img {
        width: 100%;
      }
      .stack {
        border-radius: 5px;
        box-shadow: 1px 2px 3px grey;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        margin: 0.5rem;
        padding: 0.5rem;
        position: relative;
      }
    }
    > [cols='2'] {
      width: 25%;
    }
    > [cols='4'] {
      width: 25%;
    }
  }
</style>
