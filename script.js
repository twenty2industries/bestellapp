const myDishes = [
  {
    name: "Pizza Margherita",
    price: 8.5,
    description:"Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
    amount: 0, //amount goes up if onclick function is triggered, to show the amount of the dish in the shoppingcart
    cartprice: 0, //if added more than 1 time the key price: stays 8.5 and the cartprice adds up
  },
  {
    name: "Pizza Salami",
    price: 9.5,
    description: "Pizza mit Tomatensauce, Mozzarella und pikanter Salami",
    amount: 0,
    cartprice: 0,
  },
  {
    name: "Pizza Funghi",
    price: 9.0,
    description: "Pizza mit frischen Champignons, Tomatensauce und Mozzarella",
    amount: 0,
    cartprice: 0,
  },
  {
    name: "Spaghetti Bolognese",
    price: 10.0,
    description: "Spaghetti mit würziger Rindfleisch-Tomatensauce",
    amount: 0,
    cartprice: 0,
  },
  {
    name: "Penne al Pesto",
    price: 9.0,
    description: "Penne mit hausgemachtem Basilikum-Pesto und Parmesan",
    amount: 0,
    cartprice: 0,
  },
];

function init() {
  renderAll();
}

function renderContent() {
  const contentRef = document.getElementById("content-area");
  for (let i = 0; i < myDishes.length; i++) {
    contentRef.innerHTML += returnDishes(i);
    fixPrice(i);
  }
}

function itemCartCounter(index) {
  myDishes[index].amount++;
  myDishes[index].cartprice += myDishes[index].price;
  console.log(myDishes[index].cartprice);
  console.log(myDishes[index]);
  if (myDishes[index].amount == 1) {
    returnShoppingcartContainer(index);
    getAmountCart(index);
    getCartPrice(index);
  } else{
    getAmountCart(index);
    getCartPrice(index);
  }
  fixPriceShoppingCart(index)
}

function fixPrice(i) {
  const priceRef = document.getElementById(`dish-price-${i}`);
  let price = priceRef.innerHTML.replace(",", ".");
  priceRef.innerHTML = parseFloat(price).toFixed(2).replace(".", ",") + ` €`;
}

function fixPriceShoppingCart(shoppingPriceIndex) {
  const cartPriceRef = document.getElementById(`item-cart-price-${shoppingPriceIndex}`);
  let price = cartPriceRef.innerHTML.replace(",", ".");
  cartPriceRef.innerHTML = parseFloat(price).toFixed(2).replace(".", ",") + ` €`;
}

function getAmountCart(amountindex) {
  const amountRef = document.getElementById(`item-cart-counter-${amountindex}`);
  amountRef.innerHTML = "";
  amountRef.innerHTML += myDishes[amountindex].amount;
}

function getCartPrice(cartPriceIndex) {
  const cartPriceRef = document.getElementById(`item-cart-price-${cartPriceIndex}`);
  cartPriceRef.innerHTML = "";
  cartPriceRef.innerHTML += myDishes[cartPriceIndex].cartprice;
}

function removeItem(removeItemIndex) {
  const cartPriceRef = document.getElementById(`item-cart-price-${removeItemIndex}`);
  const amountRef = document.getElementById(`item-cart-counter-${removeItemIndex}`);
  myDishes[removeItemIndex].amount--;
  myDishes[removeItemIndex].cartprice -= myDishes[removeItemIndex].price;
  amountRef.innerHTML = "";
  amountRef.innerHTML += myDishes[removeItemIndex].amount;
  cartPriceRef.innerHTML = "";
  cartPriceRef.innerHTML += myDishes[removeItemIndex].cartprice;
  fixPriceShoppingCart(removeItemIndex);
}