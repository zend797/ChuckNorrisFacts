<template>
  <div id="categories">
    <h2>Category</h2>
    <!-- <span>apiresp: {{displayCat}}</span> -->
    <!-- <ul> -->
      <!-- <li v-for="name in testing" v-bind:key="name.name" > -->
      <div class="category-selection" v-for="(value) in categories" :key="value" :value="categories.value">
        <v-btn>
          <span @click="getFacts(value)" >{{value}}</span>
        </v-btn>
        <i class="material-icons">star</i>
        <span class="fav-count" v-if="value === 'dev'">{{devFavoritesCount}}</span>
        <span class="fav-count" v-if="value === 'music'">{{musicFavoritesCount}}</span>
        <span class="fav-count" v-if="value === 'travel'">{{travelFavoritesCount}}</span>
        <!-- <span>Favorites:{{devFavoritesCount}} </span>  -->
      </div>
    <!-- </ul> -->
    <hr>
    <fact></fact>
  </div>
</template>

<script>
import Fact from './Fact.vue';
// import store from "../store/store.js";
import { mapState, mapActions, mapGetters } from 'vuex';


export default {
  components: {
    fact: Fact
  },
  created() {
    this.$store.dispatch('categoriesAction');
  },
  computed: {
    ...mapState(['categories']),
    ...mapGetters(['devFavoritesCount', 'musicFavoritesCount', 'travelFavoritesCount']),
    // categories() {
    //   // return this.$store.state.categories;
    //   // return this.$store.getters.categories
    // }
    // ...mapGetters(['test2', 'favCategories'])
  },

  methods: {
    getFacts(val) {
      // console.log(e.target.name);
      console.log(val);
      // for (let i = 0; i < 3; i++) {
      this.$store.dispatch('factsAction', val);
      // }
    }
  }
};
</script>

<style scoped lang="scss">
// @font-face {
//     font-family: CrackedCode;
//     src: url('/Users/macbook/Sites/webpack-simple/norrisFacts/src/assets/fonts/CrackedCode.ttf');
// }
#categories {
  font-family: 'Courier New', Courier, monospace;
}
.category-selection {
  display: block;
}
</style>
