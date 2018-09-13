import axios from "axios";

// export default{
//   let testitiit = async () => {
//     let categories = await axios.get("https://api.chucknorris.io/jokes/categories");
//     // let facts =

//     return {
//       categories: categories
//     }
//   }
// }

export const getCategories = () => {
  return axios.get("https://api.chucknorris.io/jokes/categories");
  // .then(resp => {
  //   // console.log('TCL: getCategories -> resp', resp);
  //   return resp.data;
  // })
  // .catch(e => {
  //   return e;
  // });
};

export const getFacts = category => {
  return axios.get(
    "https://api.chucknorris.io/jokes/random?category=" + category
  );
  // .then(resp => {
  //   return resp.data;
  // })
  // .catch(e => {
  //   return e;
  // });
};
