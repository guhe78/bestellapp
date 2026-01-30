const shoppingCartDialog = document.getElementById("shopping_cart_mobile");
const orderConfirmedDialog = document.getElementById("order_confirmed");

function renderMenu() {
  renderMenuTableHead();
  renderPageNavigation();
  renderBill();
}

function renderMenuTable(index) {
  let menuItem = document.getElementById("menu_item_" + menu[index].id);
  for (let i = 0; i < menu[index].items.length; i++) {
    menuItem.innerHTML += getMenuTableTemplate(index, i);
  }
}

function renderMenuTableHead() {
  let menuTable = document.getElementById("menu_content");

  for (let i = 0; i < menu.length; i++) {
    menuTable.innerHTML += getMenuTableHeadTemplate(i);
    renderMenuTable(i);
  }
}

function renderPageNavigation() {
  let navigation = document.getElementById("page_navigation");

  for (let i = 0; i < menu.length; i++) {
    navigation.innerHTML += getPageNavigationTemplate(i);
  }
}

function addShoppingCart(menuIndex, itemIndex) {
  let shoppingCartItem = {
    name: menu[menuIndex].items[itemIndex].name,
    price: menu[menuIndex].items[itemIndex].price,
    quantity: 1,
  };
  if (shoppingCart.length === 0) {
    shoppingCart.push(shoppingCartItem);
  } else {
    let index = shoppingCart.findIndex(
      (item) => item.name === menu[menuIndex].items[itemIndex].name,
    );
    if (index === -1) {
      shoppingCart.push(shoppingCartItem);
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
  getOrderAmount();
}

function renderBill() {
  let billContainer = document.getElementById("bill_container");
  let billContainerDialog = document.getElementById("bill_container_mobile");

  let price = getOrderPrice();
  let fee = getFee(price);

  totalPrice = price + fee;

  billContainer.innerHTML = getBillTemplate(price, totalPrice, fee);
  billContainerDialog.innerHTML = getBillTemplate(price, totalPrice, fee);

  getOrderButtonUpdate();
}

function openShoppingCart() {
  shoppingCartDialog.showModal();
  openCloseDialogsClasses(shoppingCartDialog);
}

function closeShoppingCart() {
  shoppingCartDialog.close();
  openCloseDialogsClasses(shoppingCartDialog);
}

function dialogClick(event) {
  event.stopPropagation();
}

function openOrderConfirmed() {
  if (shoppingCart.length > 0) {
    orderConfirmedDialog.showModal();
    openCloseDialogsClasses(orderConfirmedDialog);
  }
}

function closeOrderConfirmed() {
  orderConfirmedDialog.close();
  openCloseDialogsClasses(orderConfirmedDialog);
  shoppingCart = [];
  renderShoppingCart();
}

function openCloseDialogsClasses(dialogName) {
  document.body.classList.toggle("no_scroll");
  dialogName.classList.toggle("opened");
}

function toggleNavigationMenu() {
  document
    .getElementById("page_navigation")
    .classList.toggle("navigation_menu_closed");
}

function getOrderButtonUpdate() {
  let button = document.getElementById("buy_now");
  if (shoppingCart.length === 0) {
    button.disabled = true;
    button.classList.add("disabled_button");
  } else {
    button.disabled = false;
    button.classList.remove("disabled_button");
  }
}

function getOrderAmount() {
  let shoppingCartAmount = document.getElementById("shopping_cart_amount");
  let quantity = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    quantity += shoppingCart[i].quantity;
  }

  shoppingCartAmount.innerHTML = quantity;
}

function getOrderPrice() {
  let price = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    price += shoppingCart[i].quantity * shoppingCart[i].price;
  }

  return price;
}

function getFee(price) {
  let fee = 4.9;
  if (price > 20 || shoppingCart.length == 0) {
    fee = 0;
  }

  return fee;
}
