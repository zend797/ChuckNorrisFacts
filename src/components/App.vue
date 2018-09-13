<template>
  <div id="app">
    <!-- <img src="../assets/norrischuck.png"> -->
    <categies></categies>
  </div>
</template>

<script>
import Categories from './Categories.vue';
import Fact from './Fact.vue';

export default {
  components: {
    categies: Categories
    // 'fact': Fact
  },
  name: 'app'
};
</script>

<style lang="scss">
  body {
    background-color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
  }
  img {
    height: 200px;
    width: 200px;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    // font-size: inherit;
    vertical-align: middle;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  #categories > .material-icons{
    font-size: 22px;
  }
  .fav-count {
    vertical-align: middle;
    display: inline-block;
    width: 1em;
    height: 1em;
  }
</style>
