<template>
  <v-card >
    <h3>Facts...</h3>
    <ul v-for="(fact, index) in facts" :key="index" >
      <v-btn flat icon color="amber lighten-1" @click="addToFavorites(index, factCategory, fact)">
        <v-icon class="material-icons">star_border</v-icon>
      </v-btn>
      <span >{{fact}}</span>
    </ul>
  </v-card>
</template>

<script>
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
};
</script>

<style lang="scss">
</style>
