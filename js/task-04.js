// Завдання 4​

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Copy
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const ref = {
	value: document.querySelector('#value'),
	decrement: document.querySelector('[data-action="decrement"]'),
	increment: document.querySelector('[data-action="increment"]')
}

ref.decrement.addEventListener('click', onDownValue);
ref.increment.addEventListener('click', onUpValue);

let counterValue = 0;

function onDownValue() {
  counterValue -= 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}

function onUpValue() {
  counterValue += 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}




