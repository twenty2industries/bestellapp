function renderAll() {
  returnContent();
  renderContent();
  returnTotalArea();
  returnHeader();
}

function returnHeader() {
  const headerRef = document.getElementById("header");
  return (headerRef.innerHTML += `      <img src="assets/icons/Logo/Logo.png" class="websiteLogo" />`);
}

function returnShoppingcartContainer(addedDishIndex) {
  const shoppingCarContainerRef = document.getElementById("shopping-cart-container");
  return (shoppingCarContainerRef.innerHTML += `<div class="shoppingCart" id="shopping-cart-${addedDishIndex}">
          <div class="cartItems" id="cart-items-${addedDishIndex}">
            <div class="dishnameCart" id="dishname-cart-${addedDishIndex}">DISHNAME-CART</div>
            <div class="cartFunctions" id="cart-functions-${addedDishIndex}">
              <button>-</button>
              <span class="itemCartCounter" id="item-cart-counter-${addedDishIndex}">${myDishes[addedDishIndex].amount}</span>
              <button>+</button>
              <span class="itemCartPrice" id="item-cart-price-${addedDishIndex}">PREIS</span>
              <button class="deleteAllButton">DELETE</button>
            </div>
          </div>
        </div>`);
}

function returnContent() {
  const contentRef = document.getElementById("content-area");
  return (contentRef.innerHTML += `        <div class="titleImgMain"></div>
        <div class="infoSection" id="info-section">
          <h2>Twenty2Kitchen</h2>
          <span> Bewertung (4.2 von 5 Sternen)</span>
        </div>
        <div class="menuTabsDisplay">
        <div class="menuTabs">Hauptgerichte</div>
        <div class="menuTabs">Beilagen</div>
        </div>
        <div class="titleImgSecond"></div>
        <div class="menuTabName"><h2>Hauptgerichte</h2></div>`);
}

function returnDishes(index) {
  return `        <div class="dishDisplay" id="dish-display-${index}">
          <div class="dishInfo" id="dish-info-${index}">
            <span class="dishName" id="dish-name-${index}">${myDishes[index].name}</span>
            <span class="dishDetails" id="dish-details-${index}">${myDishes[index].description}</span>
            <span class="dishPrice" id="dish-price-${index}">${myDishes[index].price} €</span>
          </div>
          <button class="addDish" id="add-dish" onclick="itemCartCounter(${index})">+</button>
        </div>`;
}

function returnTotalArea() {
  const totalAreaRef = document.getElementById("total-area");
  return (totalAreaRef.innerHTML += `          <span>Zwischensumme:</span>
          <span>Lieferkosten:</span>
          <span>Gesamt:</span>`);
}


/* function returnShoppingcartContainer() {
  const shoppingCarContainerRef = document.getElementById("shopping-cart");
  return (shoppingCarContainerRef.innerHTML += `<div class="shoppingCart">
          <span><h2>WARENKORB</h2></span>
          <div class="hyphen"></div>
          <div class="cartItems" id="cart-items">
            <div class="dishnameCart" id="dishname-cart">DISHNAME-CART</div>
            <div class="cartFunctions" id="cart-functions">
              <button>-</button>
              <span class="itemCartCounter" id="item-cart-counter">ANZAHL</span>
              <button>+</button>
              <span class="itemCartPrice" id="item-cart-price">PREIS</span>
              <button class="deleteAllButton">DELETE</button>
            </div>
          </div>
          <div class="hyphen"></div>
        </div>`);
} */