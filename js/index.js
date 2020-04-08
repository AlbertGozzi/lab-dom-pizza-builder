// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.setAttribute("class", "sauce sauce-white");
  } else {
    sauce.setAttribute("class", "sauce");
  }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.setAttribute("class", "crust crust-gluten-free");
  } else {
    crust.setAttribute("class", "crust");
  }}

function renderButtons() {
  let btnPepperoni = document.querySelector('.btn.btn-pepperoni');
  state.pepperoni ? btnPepperoni.setAttribute("class", "btn btn-pepperoni active") : btnPepperoni.setAttribute("class", "btn btn-pepperoni");

  let btnMushrooms = document.querySelector('.btn.btn-mushrooms');
  state.mushrooms ? btnMushrooms.setAttribute("class", "btn btn-mushrooms active") : btnMushrooms.setAttribute("class", "btn btn-mushrooms");

  let btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
  state.greenPeppers ? btnGreenPeppers.setAttribute("class", "btn btn-green-peppers active") : btnGreenPeppers.setAttribute("class", "btn btn-green-peppers");

  let btnSauce = document.querySelector('.btn.btn-sauce');
  state.whiteSauce ? btnSauce.setAttribute("class", "btn btn-sauce active") : btnSauce.setAttribute("class", "btn btn-sauce");
  
  let btnCrust = document.querySelector('.btn.btn-crust');
  state.glutenFreeCrust ? btnCrust.setAttribute("class", "btn btn-crust active") : btnCrust.setAttribute("class", "btn btn-crust");
}

function renderPrice() {
  // Update each price
  let pricePepperoni = document.querySelector('.price-pepperoni');
  state.pepperoni ? pricePepperoni.style.visibility = "visible" : pricePepperoni.style.visibility = "hidden";

  let priceMushrooms = document.querySelector('.price-mushrooms');
  state.mushrooms ? priceMushrooms.style.visibility = "visible" : priceMushrooms.style.visibility = "hidden";

  let priceGreenPeppers = document.querySelector('.price-peppers');
  state.greenPeppers ? priceGreenPeppers.style.visibility = "visible" : priceGreenPeppers.style.visibility = "hidden";

  let priceSauce = document.querySelector('.price-sauce');
  state.whiteSauce ? priceSauce.style.visibility = "visible" : priceSauce.style.visibility = "hidden";

  let priceCrust = document.querySelector('.price-crust');
  state.glutenFreeCrust ? priceCrust.style.visibility = "visible" : priceCrust.style.visibility = "hidden";

  // Update total
  let allPrices = [...document.querySelectorAll('li.price')];
  let totalPrice = allPrices.reduce((sum, priceLi) => {
    let price = priceLi.style.visibility === 'visible' ? priceLi.innerHTML.split(' ')[0].slice(1) * 1 : 0;
    return sum + price;
  }, 0);
  
  document.querySelector('#total-price').innerHTML = `$${totalPrice + 10}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});