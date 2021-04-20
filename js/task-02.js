const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;

  return listItem;
});

ingredientsList.append(...list);

console.log(ingredientsList);
