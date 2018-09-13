<template>
  <v-app>
    <v-content>
      <div id="app">
        <v-container grid-list-md text-xs-center>
          <v-layaout row wrap>
            <v-flex xs12>
              <img src="../assets/norrischuck.png">
            </v-flex>
          </v-layaout>
        </v-container>
        <v-container grid-list-md text-xs-center class="welcome">
          <v-layaout row wrap>
            <v-flex xs12>
              <h2>Welcome to Chuck Norris facts</h2>
            </v-flex>
          </v-layaout>
        </v-container>
        <categies></categies>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Categories from './Categories.vue';
import Fact from './Fact.vue';

export default {
  components: {
    categies: Categories
  },
  name: 'app'
};
</script>

<style lang="scss">
* {
  font-family: 'Courier New', Courier, monospace;
}
body {
  background-color: #ffffff;
}
img {
  height: 200px;
  width: 200px;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
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
#categories > .material-icons {
  font-size: 22px;
}
.fav-count {
  vertical-align: middle;
  display: inline-block;
  width: 1em;
  height: 1em;
}
.welcome {
  padding: 0;
}
</style>
