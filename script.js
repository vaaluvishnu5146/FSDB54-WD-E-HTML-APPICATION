let scores = [1, 2, 3, 5, 6, 2];

// for (let x = 0; x < scores.length; x++) {
//   console.log(scores[x]);
// }

// scores.forEach((element) => {
//   console.log(element);
// });

// for (let x in scores) {
//   console.log(scores[x]);
// }

// for (let x of scores) {
//   console.log(x);
// }

// var mappedArray = scores.map((element, index) => element * 10);
// console.log(mappedArray);

// var filteredArray = scores.filter((element) => element <= 2);
// console.log(filteredArray);

// const sum = scores.reduce((carry, accumulator) => carry + accumulator);
// console.log(sum);

class Food {
  // ADD INPUT ARGUMENTS
  constructor(
    name = "",
    price = 0,
    isAvailable = false,
    cuisine = "American",
    foodType = "breakfast"
  ) {
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.cuisine = cuisine;
    this.foodType = foodType;
  }

  getCartTotalWIthTax(tax = 0) {
    return this.price + (this.price / 100) * tax;
  }

  setFoodAVailability(availability = false) {
    this.isAvailable = availability;
  }

  filterFood(foods = [], type = "lunch") {
    return foods.filter((food) => food.foodType === type);
  }
}

const foods = [
  new Food("Idli", 20, true, "South Indian", "breakfast"),
  new Food("Dosa", 40, true, "South Indian", "breakfast"),
  new Food("Karabath)", 20, true, "South Indian", "breakfast"),
  new Food("Full Meals", 40, true, "South Indian", "lunch"),
  new Food("Pizza", 40, true, "Italian", "Snack"),
];

// foods[0].isAvailable = false;
// foods[0].setFoodAVailability(true);

// foods.forEach((e) => console.log(e));
// console.log(foods.filterFood(foods, "breakfast"));

// foods.forEach((food) => console.log(food));
