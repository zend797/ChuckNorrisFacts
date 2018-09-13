<template>
  <v-container>
      <v-layout row wrap>
        <v-container grid-list-md>
        <v-flex xs12>
          <div id="categories">
              <v-flex xs12>
              <h2>Select fact category</h2>
              </v-flex>
              <div class="category-selection" v-for="(value) in categories" :key="value" :value="categories.value">
                <v-btn @click="getFacts(value)">
                  <span  >{{value}}</span>
                </v-btn>
                <v-icon color="amber darken-1" class="material-icons">star</v-icon>
                <span class="fav-count" v-if="value === 'dev'">{{devFavoritesCount}}</span>
                <span class="fav-count" v-if="value === 'music'">{{musicFavoritesCount}}</span>
                <span class="fav-count" v-if="value === 'travel'">{{travelFavoritesCount}}</span>
              </div>
          </div>
        </v-flex>
        </v-container>
        <v-container>
            <v-divider></v-divider>
        </v-container>
         <v-container grid-list-md>
          <fact></fact>
          <v-layout row wrap>
          </v-layout>
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
      'travelFavoritesCount'
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
  display: block;
}
</style>
