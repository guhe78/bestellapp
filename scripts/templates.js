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
    <button>Buy now (${totalPrice.toFixed(2)} €)</button>`;
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
                <h4 class="menu_item_headline">
                  <span>${item.name}</span
                  ><span>${item.price.toFixed(2)} €</span>
                </h4>
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

function getShoppingCartTemplate() {
  return `
     <div class="shopping_cart_item">
        <p>${shoppingCart[i].quantity}x ${shoppingCart[i].name}</p>
        <div class="buttons_price_container">
          <span class="amount_buttons_bill">
            <img src="./assets/images/page_content/buttons/trash.png" alt="" onclick="deleteShoppingCartItem(${i})" />
            <button onclick="decreaseQuantity(${[i]})">-1</button>
            <button onclick="increaseQuantity(${[i]})">+1</button>
          </span>
          <p>${(shoppingCart[i].quantity * shoppingCart[i].price).toFixed(2)} €</p>
        </div>
      </div>
    `;
}
