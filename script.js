console.log(food);
for (let i = 0; i < food.mainCourses.length; i++) {
  for (let j = 0; j < food.mainCourses[0].pizza.length; j++) {
    console.log(food.mainCourses[i].pizza[j].name);
  }
}

for (let i = 0; i < food.sideDishes.length; i++) {
  console.log(food.sideDishes[i]);
}
