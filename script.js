function renderMenu() {
  renderMenuTableHead(menu);
}

function renderMenuTable(category) {
  let menuItem = document.getElementById("menu_item_" + category.id);

  for (let i = 0; i < category.items.length; i++) {
    let item = category.items[i];

    menuItem.innerHTML += `
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
}

function renderMenuTableHead(menu) {
  let menuTable = document.getElementById("menu_content");

  for (let i = 0; i < menu.length; i++) {
    menuTable.innerHTML += `
    <div class="section_header_background"></div>
    <div class="menu_headline">
    <img src="${menu[i].categoryIcon}" alt="" />
    <h2 id="category_headline">${menu[i].name}</h2>
    </div>
    <div class="menu_item" id="menu_item_${menu[i].id}"></div>
    `;
    renderMenuTable(menu[i]);
  }
}

function addShoppingCart(menu) {
  if (shoppingCart.length === 0) {
    let quantity = 1;
    shoppingCart.push({ name: menu.name, price: menu.price, quantity });
  } else {
    let index = shoppingCart.findIndex((item) => item.name === menu.name);
    if (index === -1) {
      let quantity = 1;
      shoppingCart.push({ name: menu.name, price: menu.price, quantity });
    } else {
      raiseQuantity(index);
    }
  }

  renderShoppingCart();
}

function decreaseQuantity(index) {
  shoppingCart[index].quantity -= 1;
  if (shoppingCart[index].quantity < 1) {
    shoppingCart[index].quantity = 1;
  }
  renderShoppingCart();
}

function increaseQuantity(index) {
  shoppingCart[index].quantity += 1;
  renderShoppingCart();
}

function deleteShoppingCartItem(index) {
  shoppingCart.splice(index, 1);
  renderShoppingCart();
}

function renderShoppingCart() {
  let shoppingCartContainer = document.getElementById(
    "shopping_items_container",
  );
  shoppingCartContainer.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    shoppingCartContainer.innerHTML += `
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

  renderBill();
}

function renderBill() {
  let billContainer = document.getElementById("bill_container");
  let fee = 4.9;
  let price = 0;
  let totalPrice = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    price += shoppingCart[i].quantity * shoppingCart[i].price;
  }

  if (price > 20) {
    fee = 0;
  }

  totalPrice = price + fee;

  billContainer.innerHTML = `
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
