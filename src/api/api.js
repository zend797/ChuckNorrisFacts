import axios from 'axios';

export const getCategories = () => {
  return axios.get('https://api.chucknorris.io/jokes/categories');
};

export const getFacts = category => {
  return axios.get(
    'https://api.chucknorris.io/jokes/random?category=' + category
  );
};
