const query = (el) => document.querySelector(el);
const queryAll = (el) => document.querySelectorAll(el);


pizzaJson.map((pizza, index) => {
  let pizzaItem = query('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price}`;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
  pizzaItem.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
    let key = e.target.closest('.pizza-item').getAttribute('data-key');

    query('.pizzaInfo h1').innerHTML = pizzaJson[key].name
    query('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
    query('.pizzaBig img').src = pizzaJson[key].img
    query('.pizzaInfo h1').innerHTML = pizzaJson[key].name

    
    query('.pizzaWindowArea').style.opacity=0;
    query('.pizzaWindowArea').style.display='flex';
    setTimeout(() => {
      query('.pizzaWindowArea').style.opacity=1;
    }, 200)

  });

  query('.pizza-area').append(pizzaItem);
})
