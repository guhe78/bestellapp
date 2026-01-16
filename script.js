console.log(food.category);
console.log(food);

// for (let i = 0; i < food.mainCourses.length; i++) {
//   console.log(food.mainCourses[i]);
//   for (let j = 0; j < food.mainCourses[0].pizza.length; j++) {
//     console.log(food.mainCourses[i].pizza[j].name);
//   }
// }

// for (let i = 0; i < food.sideDishes.length; i++) {
//   console.log(food.sideDishes[i]);
// }

function getMenu() {
  let menuItem = document.getElementById("menu_item");

  for (let i = 0; i < food.mainCourses.length; i++) {
    let item = food.mainCourses[i].name;
    console.log(food.mainCourses.length);
    console.log(i);
    // for (let j = 0; j < item.length; j++) {
    //   let image = food.mainCourses[i].item[j].name;
    //   //   menuItem += `
    //   //   <img src="" />
    //   //         <ul>
    //   //           <li></li>
    //   //           <li></li>
    //   //           <li></li>
    //   //         </ul>
    //   // `;
    //   console.log(image);
    // }
  }
}
