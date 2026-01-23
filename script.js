function renderMenu() {
  renderMenuTableHead(menu);
}

function renderMenuTable(category) {
  let menuItem = document.getElementById("menu_item_" + category.id);

  for (let i = 0; i < category.items.length; i++) {
    let item = category.items[i];

    menuItem.innerHTML += getMenuTableTemplate(item);
  }
}

function renderMenuTableHead(menu) {
  let menuTable = document.getElementById("menu_content");

  for (let i = 0; i < menu.length; i++) {
    menuTable.innerHTML += getMenuTableHeadTemplate(menu[i]);
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
      increaseQuantity(index);
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
    shoppingCartContainer.innerHTML += getShoppingCartTemplate(shoppingCart[i]);
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

  billContainer.innerHTML = getBillTemplate(price, totalPrice, fee);
}
