<template>
  <div id="fact">
    <h3>Fact: </h3>
    <ul v-for="(fact, index) in facts" :key="index" >
      <!-- <li> -->
        <i class="material-icons" @click="addToFavorites(index, factCategory, fact)">star_border</i>
        <span >{{fact}}</span>
      <!-- </li> -->
    </ul>
  </div>
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
      this.$store.dispatch('favoritesAction', {category, index, fact});
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
