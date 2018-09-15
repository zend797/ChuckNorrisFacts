<template>
  <v-container grid-list-md pa-1>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card-title primary-title>
            <h3>
              Select fact category:
            </h3> 
          </v-card-title>
        </v-flex>

        <v-flex xs1 class="text-xs-right" pa-0>
          <v-card-text class="category-selection" v-for="(value) in categories" :key="value" :value="categories.value">
            <v-btn class="text-xs-right" @click="getFacts(value)">
              <span  >{{value}}</span>
            </v-btn>
          </v-card-text>
        </v-flex>

        <v-flex v-show="favorites.added == true" xs2 justify-center pa-0>
          <v-card-text class="text-xs-left fact-section">
            <v-card-text class="fact-section2">
              <v-icon v-show="devFavoritesCount.show == true"  color="amber darken-1" class="material-icons">star</v-icon>
              <span class="fav-count" ><strong>{{devFavoritesCount.count}}</strong></span>
            </v-card-text>
          </v-card-text>

          <v-card-text class="text-xs-left fact-section"> 
            <v-card-text class="fact-section2">
              <v-icon v-show="musicFavoritesCount.show == true"  color="amber darken-1" class="material-icons">star</v-icon>
              <span class="fav-count" ><strong>{{musicFavoritesCount.count}}</strong>
              </span>
            </v-card-text>
          </v-card-text>

          <v-card-text class="text-xs-left fact-section"> 
            <v-card-text class="fact-section2" >
              <v-icon v-show="travelFavoritesCount.show == true"  color="amber darken-1" class="material-icons">star</v-icon>
              <span class="fav-count"><strong>{{travelFavoritesCount.count}}</strong></span>
            </v-card-text>
          </v-card-text >

        </v-flex>

        <v-container pa-0>
          <v-divider></v-divider>
        </v-container>
        <v-container grid-list-md>
          <fact></fact>
        </v-container>
      </v-layout>
  </v-container>
</template>

<script>
import Fact from './Fact.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    fact: Fact
  },
  mounted() {
    this.$store.dispatch('categoriesAction');
  },
  computed: {
    ...mapState(['categories']),
    ...mapGetters([
      'devFavoritesCount',
      'musicFavoritesCount',
      'travelFavoritesCount',
      'favorites'
    ])
  },

  methods: {
    getFacts(val) {
      this.$store.dispatch('factsAction', val);
    }
  }
};
</script>

<style scoped lang="scss">
.category-selection {
  padding: 0;
}
.fact-section {
  padding: 0;
}
.fact-section2 {
  padding: 12px;
}
</style>
