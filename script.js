const myDishes = [
  {
    name: "Pizza Margherita",
    price: 8.5,
    description:
      "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
  },
  {
    name: "Pizza Salami",
    price: 9.5,
    description: "Pizza mit Tomatensauce, Mozzarella und pikanter Salami",
  },
  {
    name: "Pizza Funghi",
    price: 9.0,
    description: "Pizza mit frischen Champignons, Tomatensauce und Mozzarella",
  },
  {
    name: "Spaghetti Bolognese",
    price: 10.0,
    description: "Spaghetti mit würziger Rindfleisch-Tomatensauce",
  },
  {
    name: "Penne al Pesto",
    price: 9.0,
    description: "Penne mit hausgemachtem Basilikum-Pesto und Parmesan",
  },
];

function init() {
  renderAll();
}

function renderContent() {
  const contentRef = document.getElementById("content-area");
  for (let index = 0; index < myDishes.length; index++) {
    const element = myDishes[index];
    console.log(element);
    contentRef.innerHTML += returnDishes(index);
  }
}
