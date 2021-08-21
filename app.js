const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  //Adding new dishes to menu
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `The meal you ordered is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is Ghs ${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Light soup, Meat/fried fish', 11.50);
menu.addDishToCourse('appetizers', 'Hot sauce, Sardine and fried egg', 7.00);
menu.addDishToCourse('appetizers', 'Okro stew/groundnut soup with chicken', 8.50);

menu.addDishToCourse('mains', 'Fante kenkey', 3.75);
menu.addDishToCourse('mains', 'Banku', 4.95);
menu.addDishToCourse('mains', 'Fufu', 5.95);

menu.addDishToCourse('desserts', 'Orange juice', 5.50);
menu.addDishToCourse('desserts', 'Pineapple juice, mint flavor', 5.25);
menu.addDishToCourse('desserts', 'Watermelon and mango juice', 6.25);

let meal = menu.generateRandomMeal();

console.log(meal);
