// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// Copy
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Copy
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.setAttribute('class', 'item');
//   listRef.appendChild(item);
  // });


  const addlistEls = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.setAttribute('class', 'item');
    return item;
  });

  listRef.append(...addlistEls);