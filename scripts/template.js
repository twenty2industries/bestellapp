function renderAll() {
  returnContent();
  renderContent();
  returnTotalArea();
  fixPriceDelivery();
  fixPriceSubtotal();
  returnHeader();
}

function returnHeader() {
  const headerRef = document.getElementById("header");
  return (headerRef.innerHTML += `      <img src="assets/icons/Logo/Logo.png" class="websiteLogo" />`);
}

function returnShoppingcartContainer(addedDishIndex) {
  const shoppingCarContainerRef = document.getElementById("checkout-area");
  return (shoppingCarContainerRef.innerHTML += `<div class="shoppingCart" id="shopping-cart-${addedDishIndex}">
          <div class="cartItems" id="cart-items-${addedDishIndex}">
            <div class="dishnameCart" id="dishname-cart-${addedDishIndex}">${myDishes[addedDishIndex].name}</div>
            <div class="cartFunctions" id="cart-functions-${addedDishIndex}">
              <button onclick="removeItem(${addedDishIndex})">-</button>
              <span class="itemCartCounter" id="item-cart-counter-${addedDishIndex}">${myDishes[addedDishIndex].amount}</span>
              <button onclick="itemCartCounter(${addedDishIndex})")>+</button>
              <span class="itemCartPrice" id="item-cart-price-${addedDishIndex}">${myDishes[addedDishIndex].cartprice}</span>
              <button class="deleteAllButton" onclick="deleteItemFromCart(${addedDishIndex})"></button>
            </div>
          </div>
        </div>`);
}

function returnContent() {
  const contentRef = document.getElementById("content-area");
  return (contentRef.innerHTML += `        <div class="titleImgMain"></div>
    <div class="logo"></div>
        <div class="infoSection" id="info-section">
          <h2>Twenty2Kitchen</h2>
          <span> Bewertung (4.2 von 5 Sternen)</span>
        </div>
        <div class="menuTabsDisplay">
        <div class="menuTabs">Hauptgerichte</div>
        <div class="mobileCheckout" onclick="toggleCartMobile()"></div>
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
  return (totalAreaRef.innerHTML += `          
          <span> Zwischensumme: <span id="subtotal">${subtotal}</span></span>
          <span> Lieferkosten: <span id="delivery-cost">${deliveryCost}</span></span>
          <span> Gesamt: <span id="total-cost">${totalCost}</span></span>
          <div><button class="orderButton" onclick="placeOrder()">Jetzt bestellen</div>
          <div id="order-confirmation" class="orderConfirmation d_none">
    <p>Vielen Dank! Sie haben eine Testbestellung vorgenommen.</p>
              <button onclick="closeDisplay()">X</button>
</div>
          <div id="order-not-confirmed" class="orderConfirmation d_none">
    <p>Ihr Warenkorb ist leer!</p>
              <button onclick="closeDisplay()">X</button>
</div>
`);
}
