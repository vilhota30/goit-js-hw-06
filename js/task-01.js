const categoriesEL = document.querySelector('#categories');
const itemEL = document.querySelectorAll('.item');

const listItemEl = categoriesEL.children.length;
console.log("Number of categories: ", listItemEl);





itemEL.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
