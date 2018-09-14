import Vue from 'vue';
import Vuex from 'vuex';
import { getCategories, getFacts } from '../api/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    facts: [
      {
        category: '',
        value: []
      }
    ],
    devFavorites: [
      {
        count: null,
        index: [],
        value: [],
        show: false
      }
    ],
    musicFavorites: [
      {
        count: null,
        index: [],
        value: [],
        show: false

      }
    ],
    travelFavorites: [
      {
        count: null,
        index: [],
        value: [],
        show: false
      }
    ]
  },
  getters: {
    devFavoritesCount(state) {
      return state.devFavorites[0];
    },
    musicFavoritesCount(state) {
      return state.musicFavorites[0];
    },
    travelFavoritesCount(state) {
      return state.travelFavorites[0];
    }
  },
  mutations: {
    filterCategory: (state, data) => {
      state.categories = data.data.filter(val => {
        if (val == 'dev' || val == 'music' || val == 'travel') {
          return val;
        }
      });
    },
    addFacts: (state, data) => {
      data.forEach(element => {
        state.facts[0].value.push(element.data.value);
        state.facts[0].category = element.data.category;
      });
    },
    clearFacts: state => {
      state.facts[0].value = [];
    },
    addFavorite: (state, data) => {
      let category = data.category;
      let i = data.index;
      let fact = data.fact;
      switch (category) {
        case 'dev':
          if (state.devFavorites[0].value.indexOf(fact) === -1) {
            state.devFavorites[0].count += 1;
            state.devFavorites[0].value.push(fact);
            state.devFavorites[0].value.push(i);
            state.devFavorites[0].show = true;
          }
          break;
        case 'music':
          if (state.musicFavorites[0].value.indexOf(fact) === -1) {
            state.musicFavorites[0].count += 1;
            state.musicFavorites[0].value.push(fact);
            state.musicFavorites[0].value.push(i);
            state.musicFavorites[0].show = true;
          }
          break;
        case 'travel':
          if (state.travelFavorites[0].value.indexOf(fact) === -1) {
            state.travelFavorites[0].count += 1;
            state.travelFavorites[0].value.push(fact);
            state.travelFavorites[0].value.push(i);
            state.travelFavorites[0].show = true;
          }
          break;
      }
    }
  },
  actions: {
    categoriesAction: context => {
      getCategories().then(resp => {
        context.commit('filterCategory', resp);
      });
    },
    factsAction: (context, category) => {
      context.commit('clearFacts');
      const fact1 = getFacts(category);
      const fact2 = getFacts(category);
      const fact3 = getFacts(category);
      Promise.all([fact1, fact2, fact3])
        .then(resp => {
          context.commit('addFacts', resp);
        })
        .catch(err => {
          console.log(err);
        });
    },
    favoritesAction: (context, { category, index, fact }) => {
      context.commit('addFavorite', { category, index, fact });
    }
  }
});
