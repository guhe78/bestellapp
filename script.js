let dialog = document.getElementById("shopping_cart_dialog");

function renderMenu() {
  renderMenuTableHead(menu);
  renderBill();
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
  let shoppingCartDialogContainer = document.getElementById(
    "dialog_content_section",
  );

  shoppingCartContainer.innerHTML = "";
  shoppingCartDialogContainer.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    shoppingCartContainer.innerHTML += getShoppingCartTemplate(i);
    shoppingCartDialogContainer.innerHTML += getShoppingCartTemplate(i);
  }

  renderBill();
  getShoppingCartLength();
}

function renderBill() {
  let billContainer = document.getElementById("bill_container");
  let billContainerDialog = document.getElementById("bill_container_mobile");

  let fee = 4.9;
  let price = 0;
  let totalPrice = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    price += shoppingCart[i].quantity * shoppingCart[i].price;
  }

  if (price > 20 || shoppingCart.length == 0) {
    fee = 0;
  }

  totalPrice = price + fee;

  billContainer.innerHTML = getBillTemplate(price, totalPrice, fee);
  billContainerDialog.innerHTML = getBillTemplate(price, totalPrice, fee);
}

function toggleShoppingCart() {
  document
    .getElementById("shopping_cart_mobile")
    .classList.toggle("resp_menu_closed");
}

function onCloseShoppingCart(event) {
  if (event.target == dialog || event.target == button) {
    dialog.close();
    document.body.classList.remove("no_scroll");
  }
}

function orderConfirmedDialog(event) {
  let orderConfirmed = document.getElementById("order_confirmed");
  orderConfirmed.showModal();
  orderConfirmed.classList.add("opened");
  onCloseShoppingCart(event);
}

function getShoppingCartLength() {
  let shoppingCartAmount = document.getElementById("shopping_cart_amount");
  let quantity = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    quantity += shoppingCart[i].quantity;
  }

  shoppingCartAmount.innerHTML = quantity;
}
