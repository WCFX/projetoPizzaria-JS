const query = (el) => document.querySelector(el);
const queryAll = (el) => document.querySelectorAll(el);


pizzaJson.map((pizza, index) => {
  let pizzaItem = query('.models .pizza-item').cloneNode(true);

  pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price}`;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;

  query('.pizza-area').append(pizzaItem);
})