function renderAll() {
  returnContent();
  renderContent();
  returnShoppingcartContainer();
  returnTotalArea();
  returnHeader();
}

function returnHeader() {
  const headerRef = document.getElementById("header");
  return (headerRef.innerHTML += `      <img src="assets/icons/Logo/Logo.png" class="websiteLogo" />`);
}

function returnShoppingcartContainer() {
  const shoppingCarContainerRef = document.getElementById("shopping-cart");
  return (shoppingCarContainerRef.innerHTML += `        <div class="shoppingCart">
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
}

function returnContent() {
  const contentRef = document.getElementById("content-area");
  return (contentRef.innerHTML += `        <div class="titleImgMain"><h1>Titelbild</h1></div>
        <div class="infoSection" id="info-section">
          <h1>GeschäftInfo & Bewertung</h1>
        </div>
        <div class="menuTabs" id="menu-tabs"><h1>TAB NAV</h1></div>
        <div class="titleImgSecond">
          <h1>TAB NAV TITELBILD (HAUPTGERICHT)</h1>
        </div>
        <div class="menuTabName" id="menuTabName"><h1>TAB NAV NAME</h1></div>`);
}

function returnDishes(index) {
  return `        <div class="dishDisplay" id="dish-display-${index}">
          <div class="dishInfo" id="dish-info-${index}">
            <span class="dishName" id="dish-name-${index}">${myDishes[index].name}</span>
            <span class="dishDetails" id="dish-details-${index}">${myDishes[index].description}</span>
            <span class="dishPrice" id="dish-price-${index}">${myDishes[index].price} €</span>
          </div>
          <button class="addDish" id="add-dish">+</button>
        </div>`;
}

function returnTotalArea() {
  const totalAreaRef = document.getElementById("total-area");
  return (totalAreaRef.innerHTML += `          <span>Zwischensumme:</span>
          <span>Lieferkosten:</span>
          <span>Gesamt:</span>`);
}
