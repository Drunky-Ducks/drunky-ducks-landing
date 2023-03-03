import cocktails from "../services/cocktails.json";
// const getAllCocktails = async() => {
//   const data = await fetch("../services/cocktails.json")
//     .then(data => data.json())
//     .then(data => data);
//   return data;
// };

const getAllCocktails = () => cocktails.drinks;

export default getAllCocktails;
