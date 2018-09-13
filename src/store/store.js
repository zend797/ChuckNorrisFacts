import Vue from 'vue';
import Vuex from 'vuex';
// import { apiData } from '../api/api.js';
// import axios from 'axios';
import { getCategories, getFacts } from '../api/api.js';
// getCategories().then(res=>{
// console.log('TCL: res', res);

Vue.use(Vuex);

export default new Vuex.Store({
  // debug: true,
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
        value: []
      }
    ],
    musicFavorites: [
      {
        count: null,
        index: [],
        value: []
      }
    ],
    travelFavorites: [
      {
        count: null,
        index: [],
        value: []
      }
    ]
  },
  getters: {
    devFavoritesCount(state) {
      return state.devFavorites[0].count;
    },
    musicFavoritesCount(state) {
      return state.musicFavorites[0].count;
    },
    travelFavoritesCount(state, getters) {
      return state.travelFavorites[0].count;
    }

    //data functions, map...etc
    // favCategories: state => {
    //   // return state.categories.map(val => {
    //   //     if (val == 'dev' || val == 'music' || val == 'money'){
    //   //         return val;
    //   //     }
    //   // })
    // },
    // test2: zzz => {}
  },
  mutations: {
    filterCategory: (state, data) => {
      // console.log('TCL: data', data.data);
      // state.categories = data.data;
      // console.log('TCL: state', state);
      state.categories = data.data.filter(val => {
        if (val == 'dev' || val == 'music' || val == 'travel') {
          return val;
        }
      });
    },
    addFacts: (state, data) => {
      // console.log('TCL: data', data);
      data.forEach(element => {
        state.facts[0].value.push(element.data.value);
        state.facts[0].category = element.data.category;
      });
    },
    clearFacts: state => {
      state.facts[0].value = [];
    },
    addFavorite: (state, data) => {
      // category = data.category
      let category = data.category;
      let i = data.index;
      let fact = data.fact;
      switch (category) {
        case 'dev':
          if (state.devFavorites[0].value.indexOf(fact) === -1) {
            state.devFavorites[0].count += 1;
            state.devFavorites[0].value.push(fact);
          }
          break;
        case 'music':
            if (state.musicFavorites[0].value.indexOf(fact) === -1) {
              state.musicFavorites[0].count += 1;
              state.musicFavorites[0].value.push(fact);
            }
          break;
        case 'travel':
          if (state.travelFavorites[0].value.indexOf(fact) === -1) {
            state.travelFavorites[0].count += 1;
            state.travelFavorites[0].value.push(fact);
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
    //async, commit mutation an dispatch it to component asynchronously
    // dispatch in component
  }
});
