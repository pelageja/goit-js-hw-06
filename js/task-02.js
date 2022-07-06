const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const listUl = document.querySelector("ul#ingredients");

const listEl = ingredients.map((el) => {
  const itemLiEl = document.createElement('li');
  itemLiEl.classList.add('item');
  itemLiEl.textContent = el;
  return itemLiEl;
  })


listUl.append(...listEl);
console.log(listUl);



