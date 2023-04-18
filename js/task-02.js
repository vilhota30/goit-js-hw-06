const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  'Bread',
  'Cheese',
];


const ingredientsListEl = document.querySelector('#ingredients');

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join('');

// ingredientsListEl.insertAdjacentHTML("beforeend", markup);


for (let i = 0; i < ingredients.length; i += 1) {
  const liIngredientsEl = document.createElement('li');
  liIngredientsEl.classList.add('item');
  liIngredientsEl.textContent = ingredients[i];
  ingredientsListEl.append(liIngredientsEl);
}


// const liIngredientsEl = document.createElement('li');
// liIngredientsEl.classList.add('item');
// liIngredientsEl.textContent = 'Potatoes';

// const mushroomsEl = document.createElement('li');
// mushroomsEl.classList.add('item');
// mushroomsEl.textContent = 'Mushrooms';

// const garlicEl = document.createElement('li');
// garlicEl.classList.add('item');
// garlicEl.textContent = 'Garlic';


// const tomatosEl = document.createElement('li');
// tomatosEl.classList.add('item');
// tomatosEl.textContent = 'Tomatos';


// const herbsEl = document.createElement('li');
// herbsEl.classList.add('item');
// herbsEl.textContent = 'Herbs';


// const condimentsEl = document.createElement('li');
// condimentsEl.classList.add('item');
// condimentsEl.textContent = 'Condiments';


// ingredientsEl.append(liIngredientsEl, mushroomsEl, garlicEl, tomatosEl, herbsEl, condimentsEl);

