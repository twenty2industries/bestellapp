const myDishes = [
  {
    name: "Pizza Margherita",
    price: 8.5,
    description:
      "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
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
  console.log(myDishes[index]);

  if (myDishes[index].amount <= 1) {
    returnShoppingcartContainer(index);
    const amountRef = document.getElementById(`item-cart-counter-${index}`);
    amountRef.innerHTML = "";
    amountRef.innerHTML += myDishes[index].amount;
    console.log(myDishes[index]);
  }
}

function fixPrice(i) {
  const priceRef = document.getElementById(`dish-price-${i}`);
  let price = priceRef.innerHTML.replace(",", ".");
  priceRef.innerHTML = parseFloat(price).toFixed(2).replace(".", ",") + ` EUR`;
}

//function
