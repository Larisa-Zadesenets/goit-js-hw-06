const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const creatList = content =>{
return content.map((ingredient) => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = ingredient;
  liIngredient.classList.add("item");
  return liIngredient;
});
}
const elements = creatList(ingredients);
ingredientsList.append(...elements);
console.log(ingredientsList);


