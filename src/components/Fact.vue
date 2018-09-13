<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <div id="fact">
        <h3>Fact: </h3>
        <ul v-for="(fact, index) in facts" :key="index" >
          <v-btn flat icon color="amber lighten-1" @click="addToFavorites(index, factCategory, fact)">
            <v-icon class="material-icons">star_border</v-icon>
          </v-btn>
          <span >{{fact}}</span>
        </ul>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
// import store from "../store/store.js";

export default {
  computed: {
    facts() {
      return this.$store.state.facts[0].value;
    },
    factCategory() {
      return this.$store.state.facts[0].category[0];
    }
  },
  methods: {
    addToFavorites(index, category, fact) {
      this.$store.dispatch('favoritesAction', { category, index, fact });
    }
  }
  // data () {
  //   return {
  //     // msg: 'Welcome to Your Vue.js App'
  //   }
  // }
};
</script>

<style lang="scss">
// #fact {
//    font-family: "Courier New", Courier, monospace;
// }
</style>
