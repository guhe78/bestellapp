function renderMenu(category) {
  renderMenuTableHead(category);
}

function renderMenuTable(category) {
  let menuItem = document.getElementById("menu_item_" + category.id);
  console.log(category.id);

  for (let i = 0; i < category.items.length; i++) {
    menuItem.innerHTML += `
    <table class="menu_table">
    <tr>
    <img src="${category.items[i].imageUrl}" alt="" id="menu_image" />
    <tr>
    <th>${category.items[i].name}</th>
    <th>${category.items[i].price.toFixed(2)} €</th>
    </tr>
    <tr>
    <td>${category.items[i].ingredients}</td>
    </tr>
    <tr>
    <button>Warenkorb</button>
    </tr>
    </tr>
    </table>
    `;
  }
}

function renderMenuTableHead(category) {
  let menuTable = document.getElementById("menu_content");
  let headline = category.name;
  console.log(headline);

  menuTable.innerHTML += `
  <div class="section_header_background"></div>
  <div class="menu_headline">
  <img src="${category.categoryIcon}" alt="" />
  <h2 id="category_headline">${headline}</h2>
  </div>
  <div id="menu_item_${category.id}"></div>
  `;
  renderMenuTable(category);
}

renderMenu(menu.burger);
renderMenu(menu.pizza);
renderMenu(menu.salad);
renderMenu(menu.extras);
renderMenu(menu.deserts);
renderMenu(menu.beverages);
