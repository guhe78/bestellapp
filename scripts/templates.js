function getBillTemplate(price, totalPrice, fee) {
  return `
    <h4>
      <span>Subtotal</span> <span>${price.toFixed(2)} €</span>
    </h4>
    <h4>
      <span>Delivery fee</span> <span>${fee.toFixed(2)} €</span>
    </h4>
    <hr />
    <h3>
      <span>Total</span> <span>${totalPrice.toFixed(2)} €</span>
    </h3>
    <button class="buy_now" id="buy_now" onclick="openOrderConfirmed(event)">
      <h3><span>Buy now</span> (${totalPrice.toFixed(2)} €)</h3>
    </button>`;
}

function getMenuTableTemplate(menuIndex, itemIndex) {
  return `
    <section class="menu_container">
              <img
                src="${menu[menuIndex].items[itemIndex].imageUrl}"
                alt=""
                class="menu_image"
                id="menu_image"
              />
              <div class="menu_item_info">
              <div  class="menu_item_headline">
                  <p>${menu[menuIndex].items[itemIndex].name}</>
                  <p class="menu_price">${menu[menuIndex].items[itemIndex].price.toFixed(2)} €</p>
                  </div>
                <td>${menu[menuIndex].items[itemIndex].ingredients.join(", ")}</td>
                <div class="mobile_only">
                  <p class="menu_price_mobile">${menu[menuIndex].items[itemIndex].price.toFixed(2)} €</p>
                <button
                  class="button_addcart"
                  id="add_cart_button"
                  onclick='addShoppingCart(${menuIndex}, ${itemIndex})'
                >
                  Add to cart
                </button>
                </div>
              </div>
            </section>
    `;
}

function getShoppingCartTemplate(indexNumber) {
  return `
     <div class="shopping_cart_item">
        <p>${shoppingCart[indexNumber].quantity}x ${shoppingCart[indexNumber].name}</p>
        <div class="buttons_price_container">
          <span class="amount_buttons_bill">
            <img src="./assets/images/page_content/buttons/trash.png" alt="" 
              onclick="deleteShoppingCartItem(${indexNumber})" />
            <button onclick="decreaseQuantity(${indexNumber})">-1</button>
            <button onclick="increaseQuantity(${indexNumber})">+1</button>
          </span>
          <p>${(shoppingCart[indexNumber].quantity * shoppingCart[indexNumber].price).toFixed(2)} €</p>
        </div>
      </div>
    `;
}

function getMenuTableHeadTemplate(index) {
  return `
    <div class="headline_background"></div>
    <div class="menu_headline" id="${menu[index].id}">
      <div>
        <img src="${menu[index].categoryIcon}" alt="" />
        <h2 id="category_headline">${menu[index].name}</h2>
      </div>    
        <a href="#home" >
          <img src="./assets/icons/arrow_upward.png" alt="nach oben gerichteter Pfeil" class="home_arrow" />
        </a>    
    </div>
    <div class="menu_item" id="menu_item_${menu[index].id}"></div>
    `;
}

function getPageNavigationTemplate(index) {
  return `
    <a href="#${menu[index].id}">${menu[index].name}</a>
  `;
}
