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
    cartprice:0,
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

let deliveryCost = 2.5;
let subtotal = 0;
let totalCost = deliveryCost;

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
  if (myDishes[index].amount == 1) {
    returnShoppingcartContainer(index);
    getAmountCart(index);
    getCartPrice(index);
    getSubtotal(index);
    getTotalcost();
  } else{
    getAmountCart(index);
    getCartPrice(index);
    getSubtotal(index);
    getTotalcost();
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

function fixPriceDelivery() {
  const deliveryCostRef = document.getElementById(`delivery-cost`);
  const totalCostRef = document.getElementById(`total-cost`);
  deliveryCostRef.innerHTML = parseFloat(deliveryCost).toFixed(2).replace(".", ",") + ` €`;
  totalCostRef.innerHTML = parseFloat(totalCost).toFixed(2).replace(".", ",") + ` €`;
}

function fixPriceSubtotal() {
  const subtotalRef = document.getElementById(`subtotal`);
  subtotalRef.innerHTML = parseFloat(subtotal).toFixed(2).replace(".", ",") + ` €`;
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
  if (myDishes[removeItemIndex].amount !== 0) {
    const cartPriceRef = document.getElementById(`item-cart-price-${removeItemIndex}`);
    const amountRef = document.getElementById(`item-cart-counter-${removeItemIndex}`);
    myDishes[removeItemIndex].amount--;
    myDishes[removeItemIndex].cartprice -= myDishes[removeItemIndex].price;
    amountRef.innerHTML = "";
    amountRef.innerHTML += myDishes[removeItemIndex].amount;
    cartPriceRef.innerHTML = "";
    cartPriceRef.innerHTML += myDishes[removeItemIndex].cartprice;
    fixPriceShoppingCart(removeItemIndex);
    removeSubtotal(removeItemIndex);
  } if (myDishes[removeItemIndex].amount == 0) {
    deleteItemFromCart(removeItemIndex);
  }
}

function deleteItemFromCart(deleteItemIndex) {
  subtotal -= myDishes[deleteItemIndex].cartprice;
  totalCost -= myDishes[deleteItemIndex].cartprice;
  myDishes[deleteItemIndex].cartprice = 0;
  myDishes[deleteItemIndex].amount = 0;
  const cartPriceRef = document.getElementById(`shopping-cart-${deleteItemIndex}`);
  cartPriceRef.remove();
  const subTotalRef = document.getElementById('subtotal');
  subTotalRef.innerHTML = subtotal;
  const totalREf = document.getElementById('total-cost');
  totalREf.innerHTML = totalCost;
  fixPriceSubtotal();
  fixPriceDelivery();
}

function getSubtotal(subtotalIndex) {
    const element = myDishes[subtotalIndex].price;
    const subtotalRef = document.getElementById('subtotal')
    subtotal += myDishes[subtotalIndex].price;
    subtotalRef.innerHTML += subtotal;
    fixPriceSubtotal();
}

function removeSubtotal(subtotalIndex) {
  const element = myDishes[subtotalIndex].price;
  const subtotalRef = document.getElementById('subtotal')
  subtotal -= myDishes[subtotalIndex].price;
  subtotalRef.innerHTML -= subtotal;
  getTotalcost();
  fixPriceSubtotal();
}

function getTotalcost() {
  const totalCostRef = document.getElementById('total-cost');
  totalCost = subtotal + deliveryCost;
  totalCostRef.innerHTML = '';
  totalCostRef.innerHTML = totalCost;  
  fixPriceDelivery()
}

function toggleCartMobile() {
  const cart = document.querySelector('.shoppingCartContainer');
  cart.classList.toggle('d_none');
}

function placeOrder() {
  if (subtotal !== 0) {
    clearCart();
    const confirmation = document.getElementById('order-confirmation');
    confirmation.classList.remove('d_none'); 
  }
  else{
    const confirmation = document.getElementById('order-not-confirmed');
    confirmation.classList.remove('d_none'); 
  }
}

function clearCart() {
  for (let i = 0; i < myDishes.length; i++) {
      myDishes[i].amount = 0;
      myDishes[i].cartprice = 0;
      const cartItem = document.getElementById(`shopping-cart-${i}`);
      if (cartItem) {
          cartItem.remove();
      }
  }
    subtotal = 0;
  totalCost = deliveryCost;
  const subTotalRef = document.getElementById('subtotal');
  const totalRef = document.getElementById('total-cost');
  subTotalRef.innerHTML = subtotal.toFixed(2).replace(".", ",") + " €";
  totalRef.innerHTML = totalCost.toFixed(2).replace(".", ",") + " €";
}

function closeDisplay() {
  const confirmation = document.getElementById('order-confirmation');
  const notConfirmed = document.getElementById('order-not-confirmed');
  notConfirmed.classList.add('d_none');
  confirmation.classList.add('d_none');
}
