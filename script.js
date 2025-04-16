const myDishes = [
  {
    name: "Pizza Margherita",
    price: 8.5,
    description: "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum"
  },
  {
    name: "Pizza Salami",
    price: 9.5,
    description: "Pizza mit Tomatensauce, Mozzarella und pikanter Salami"
  },
  {
    name: "Pizza Funghi",
    price: 9.0,
    description: "Pizza mit frischen Champignons, Tomatensauce und Mozzarella"
  },
  {
    name: "Spaghetti Bolognese",
    price: 10.0,
    description: "Spaghetti mit würziger Rindfleisch-Tomatensauce"
  },
  {
    name: "Penne al Pesto",
    price: 9.0,
    description: "Penne mit hausgemachtem Basilikum-Pesto und Parmesan"
  }
];


function init() {
  returnContent();
  renderContent();
}

function renderContent() {
  const contentRef = document.getElementById('content-area')
  for (let index = 0; index < myDishes.length; index++) {
    const element = myDishes[index];
    console.log(element);
    contentRef.innerHTML += returnDishes(index)
  }
}

function returnContent() {
  const contentRef = document.getElementById('content-area');
  return contentRef.innerHTML += `        <div class="titleImgMain"><h1>Titelbild</h1></div>
        <div class="infoSection" id="info-section">
          <h1>GeschäftInfo & Bewertung</h1>
        </div>
        <div class="menuTabs" id="menu-tabs"><h1>TAB NAV</h1></div>
        <div class="titleImgSecond">
          <h1>TAB NAV TITELBILD (HAUPTGERICHT)</h1>
        </div>
        <div class="menuTabName" id="menuTabName"><h1>TAB NAV NAME</h1></div>`
}

function returnDishes(index) {
  return `        <div class="dishDisplay" id="dish-display-${index}">
          <div class="dishInfo" id="dish-info-${index}">
            <span class="dishName" id="dish-name-${index}">${myDishes[index].name}</span>
            <span class="dishDetails" id="dish-details-${index}">${myDishes[index].description}</span>
            <span class="dishPrice" id="dish-price-${index}">${myDishes[index].price} €</span>
          </div>
          <div class="addDish" id="add-dish">+</div>
        </div>`
}