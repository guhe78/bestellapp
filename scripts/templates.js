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
    <button class="buy_now" onclick="orderConfirmed(event)">
      <h3>Buy now (${totalPrice.toFixed(2)} €)</h3>
    </button>`;
}

function getMenuTableTemplate(item) {
  return `
    <section class="menu_container">
              <img
                src="${item.imageUrl}"
                alt=""
                class="menu_image"
                id="menu_image"
              />
              <div class="menu_item_info">
                  <h4 class="menu_item_headline">${item.name}</h4
                  ><h4 class="menu_item_headline menu_price">${item.price.toFixed(2)} €</h4>
                <td>${item.ingredients}</td>
                <button
                  class="button_addcart"
                  id="add_cart_button"
                  onclick='addShoppingCart(${JSON.stringify(item)})'
                >
                  Add to cart
                </button>
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

function getMenuTableHeadTemplate(menu) {
  return `
    <div class="headline_background">
      <div class="menu_headline">
        <img src="${menu.categoryIcon}" alt="" />
        <h2 id="category_headline">${menu.name}</h2>
      </div>
    </div>
    <div class="menu_item" id="menu_item_${menu.id}"></div>
    `;
}
