const modalQuantidade = 1;
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
    modalQuantidade = 1;

    query('.pizzaInfo h1').innerHTML = pizzaJson[key].name
    query('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
    query('.pizzaBig img').src = pizzaJson[key].img
    query('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
    query('.pizzaInfo--size.selected').classList.remove('selected');
    queryAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
      if(sizeIndex == 2){
        size.classList.add('selected');
      }

      size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    })

    query('.pizzaInfo--qt').innerHTML = modalQuantidade;
    query('.pizzaWindowArea').style.opacity=0;
    query('.pizzaWindowArea').style.display='flex';
    setTimeout(() => {
      query('.pizzaWindowArea').style.opacity=1;
    }, 200)

  });

  query('.pizza-area').append(pizzaItem);
})
