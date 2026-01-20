function renderMenu(category) {
  renderMenuTableHead(category);
}

function openDialog() {
  let dialog = document.getElementById("shopping_cart_dialog");
  dialog.showModal();
}

function closeDialog() {
  let dialog = document.getElementById("shopping_cart_dialog");
  dialog.close();
}

function renderMenuTable(category) {
  let menuItem = document.getElementById("menu_item_" + category.id);
  console.log(category.id);

  for (let i = 0; i < category.items.length; i++) {
    menuItem.innerHTML += `
    <section class="menu_container">
              <img
                src="${category.items[i].imageUrl}"
                alt=""
                class="menu_image"
                id="menu_image"
              />
              <div class="menu_item_info">
                <h4 class="menu_item_headline">
                  <span>${category.items[i].name}</span
                  ><span>${category.items[i].price.toFixed(2)} €</span>
                </h4>
                <td>${category.items[i].ingredients}</td>
                <button
                  class="button_addcart"
                  id="add_cart_button"
                  onclick="openDialog()"
                >
                  Add to cart
                </button>
              </div>
            </section>
    `;
  }
}

function renderMenuTableHead(category) {
  let menuTable = document.getElementById("menu_content");
  let headline = category.name;
  let icon = category.categoryIcon;

  menuTable.innerHTML += `
  <div class="section_header_background"></div>
          <div class="menu_headline">
            <img src="${icon}" alt="" />
            <h2 id="category_headline">${headline}</h2>
          </div>
          <div class="menu_item" id="menu_item_${category.id}"></div>
  `;
  renderMenuTable(category);
}

renderMenu(menu.burger);
renderMenu(menu.pizza);
renderMenu(menu.salad);
renderMenu(menu.extras);
renderMenu(menu.deserts);
renderMenu(menu.beverages);

function onToggleShoppingCart() {
  document
    .getElementById("shopping_cart_section")
    .classList.toggle("shopping_cart_open");
}
