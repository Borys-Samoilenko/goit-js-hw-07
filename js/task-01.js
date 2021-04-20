const categoriesList = document.querySelectorAll('.item');

console.log(`В списке ${categoriesList.length} категории.`);

categoriesList.forEach(category => {
  const categoryTitle = category.firstElementChild.textContent;
  console.log(`Категория: ${categoryTitle}`);

  const numberOfElements = category.lastElementChild.children.length;
  console.log(`Количество элементов: ${numberOfElements}`);
});
