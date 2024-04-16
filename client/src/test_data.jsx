export const tempGroceries = [
  {
    name: "cauliflower",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2024-04-16").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "potato",
    image: "https://i.pravatar.cc/48",
    // qty: 500,
    purchaseDate: new Date("2024-04-16").getTime(),
    shelfLife: 8,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "onion",
    image: "https://i.pravatar.cc/49",
    // qty: 750,
    purchaseDate: new Date("2024-04-16").getTime(),
    shelfLife: 12,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "tomato",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2024-04-16").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "brinjal",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2024-04-16").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "peas",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2024-04-16").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "cabbage",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2023-09-11").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "watermelon",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2023-09-11").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "orange",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2023-09-11").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "apple",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2023-09-11").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
  {
    name: "peach",
    image: "https://i.pravatar.cc/47",
    // qty: 250,
    purchaseDate: new Date("2023-09-11").getTime(),
    shelfLife: 5,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
];

export const tempRecipies = [
  {
    name: "Savoy Cabbage and Celery Root Soup with Leek Confit",
    ingredients: [
      ["extra virgin olive oil", "2tablespoons"],
      ["onion", "1.5cups"],
      ["celery root", "1.5cups"],
      ["garlic cloves", "3large"],
      ["scallions", "0.5cup"],
      ["leek confit", "0.25cup"],
      ["fuji apple", "0.5"],
      ["dijon mustard", "1tablespoon"],
      ["rosemary", "1teaspoon"],
      ["vegetable broth", "5cups"],
      ["baby potatoes", "0.6666667cup"],
      ["savoy cabbage", "3cups"],
      ["kosher salt", "1teaspoon"],
      ["pepper", "0.5teaspoon"],
      ["brown basmati rice", "0.5cup"],
      ["parmesan cheese", "0.5cup"],
    ],
    image: "https://img.spoonacular.com/recipes/659513-556x370.jpg",
    prepTime: 45,
    description:
      'Savoy Cabbage and Celery Root Soup with Leek Confit might be just the hor d\'oeuvre you are searching for. This recipe serves 7. Watching your figure? This gluten free recipe has <b>183 calories</b>, <b>5g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.51 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. A mixture of vegetable broth, garlic cloves, celery root, and a handful of other ingredients are all it takes to make this recipe so flavorful. It will be a hit at your <b>Autumn</b> event. 2 people found this recipe to be scrumptious and satisfying. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 50%</b>, this dish is good. Similar recipes include <a href="https://spoonacular.com/recipes/savoy-cabbage-and-celery-root-soup-with-leek-confit-1404279">Savoy Cabbage and Celery Root Soup with Leek Confit</a>, <a href="https://spoonacular.com/recipes/leek-and-celery-root-soup-619045">Leek and Celery Root Soup</a>, and <a href="https://spoonacular.com/recipes/silky-leek-celery-root-soup-38324">Silky Leek & Celery Root Soup</a>.',
    serves: 7,
  },
  {
    name: "Hearty, Healthy Beef Stew",
    ingredients: [
      ["bay leaves", "2"],
      ["beef stew meat", "1.25pounds"],
      ["canned tomatoes", "14ounces"],
      ["carrot", "1"],
      ["carrots", "3"],
      ["celery", "1stalk"],
      ["parsley", "3tablespoons"],
      ["thyme", "1.5teaspoons"],
      ["garlic", "2cloves"],
      ["olive oil", "4teaspoons"],
      ["onion", "1small"],
      ["pearl onions", "12"],
      ["peas", "1.5cups"],
      ["potatoes", "5medium"],
      ["red wine", "0.75cup"],
      ["salt and pepper", "6servings"],
    ],
    image: "https://img.spoonacular.com/recipes/646589-556x370.jpg",
    prepTime: 120,
    description:
      'Hearty, Healthy Beef Stew is a <b>gluten free and dairy free</b> main course. This recipe serves 6. One portion of this dish contains around <b>29g of protein</b>, <b>8g of fat</b>, and a total of <b>418 calories</b>. For <b>$2.58 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. It will be a hit at your <b>Autumn</b> event. This recipe from Foodista requires peas, thyme, red wine, and carrots. From preparation to the plate, this recipe takes roughly <b>2 hours</b>. Overall, this recipe earns a <b>great spoonacular score of 90%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/hearty-healthy-beef-stew-1221521">Hearty, Healthy Beef Stew</a>, <a href="https://spoonacular.com/recipes/hearty-healthy-beef-stew-1632259">Hearty, Healthy Beef Stew</a>, and <a href="https://spoonacular.com/recipes/hearty-healthy-beef-stew-giveaway-834414">Hearty Healthy Beef Stew + Giveaway</a>.',
    serves: 6,
  },
  {
    name: "Slow Braised Red Wine Lamb Stew with Moroccan Spices",
    ingredients: [
      ["leg of lamb", "2pounds"],
      ["cooking oil", "2tbsp"],
      ["onion", "1medium"],
      ["garlic", "2cloves"],
      ["wine", "1cup"],
      ["potatoes", "2pounds"],
      ["baby carrots", "8ounces"],
      ["peas", "1cup"],
      ["canned tomatoes", "28ounces"],
      ["alhambra merguez seasoning", "2tsp"],
      ["salt", "0.5tsp"],
      ["pepper", "0.25tsp"],
      ["water", "1.5cups"],
      ["all purpose flour", "0.25cup"],
    ],
    image: "https://img.spoonacular.com/recipes/1098301-556x370.jpg",
    prepTime: 155,
    description:
      'Slow Braised Red Wine Lamb Stew with Moroccan Spices could be just the <b>dairy free</b> recipe you\'ve been looking for. One portion of this dish contains roughly <b>39g of protein</b>, <b>14g of fat</b>, and a total of <b>601 calories</b>. For <b>$4.19 per serving</b>, you get a main course that serves 4. <b>Autumn</b> will be even more special with this recipe. This recipe from Foodista requires baby carrots, wine, alhambra merguez seasoning, and garlic. Not a lot of people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around <b>2 hours and 35 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 87%</b>, which is great. Similar recipes include <a href="https://spoonacular.com/recipes/red-wine-braised-lamb-shanks-15804">Red Wine Braised Lamb Shanks</a>, <a href="https://spoonacular.com/recipes/red-wine-braised-leg-of-lamb-481190">Red Wine Braised Leg Of Lamb</a>, and <a href="https://spoonacular.com/recipes/red-wine-braised-lamb-shanks-15809">Red Wine-Braised Lamb Shanks</a>.',
    serves: 4,
  },
  {
    name: "Pork Menudo",
    ingredients: [
      ["size bell pepper", "4medium"],
      ["butter", "2tablespoons"],
      ["carrots", "3large"],
      ["chorizo", "3links"],
      ["garbanzo beans", "0.5cup"],
      ["garlic", "4cloves"],
      ["oil", "2tablespoons"],
      ["size onions", "5medium"],
      ["peas", "0.5cup"],
      ["bell pepper", "4servings"],
      ["bell pepper", "4servings"],
      ["pork livers", "0.25kilo"],
      ["pork cubes", "0.5kilo"],
      ["potatoes", "3large"],
      ["raisins", "0.25cup"],
      ["salt", "4servings"],
      ["size tomatoes", "6medium"],
    ],
    image: "https://img.spoonacular.com/recipes/656791-556x370.jpg",
    prepTime: 45,
    description:
      'The recipe Pork Menudo can be made <b>in approximately 45 minutes</b>. One serving contains <b>990 calories</b>, <b>38g of protein</b>, and <b>49g of fat</b>. For <b>$4.54 per serving</b>, this recipe <b>covers 42%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 3 people have made this recipe and would make it again. This recipe from Foodista requires size bell pepper, bell pepper, potatoes, and chorizo. It works well as a rather pricey main course. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 83%</b>. This score is super. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/pork-menudo-1423925">Pork Menudo</a>, <a href="https://spoonacular.com/recipes/pork-menudo-1259415">Pork Menudo</a>, and <a href="https://spoonacular.com/recipes/pork-menudo-1497429">Pork Menudo</a>.',
    serves: 4,
  },
  {
    name: "Ethiopian Lentil Curry",
    ingredients: [
      ["amchar masala", "1tablespoon"],
      ["brown lentils", "1cup"],
      ["canned tomatoes", "1can"],
      ["cauliflower head", "1"],
      ["garlic cloves", "2"],
      ["onion", "1"],
      ["peas", "2cups"],
      ["yogurt", "0.25cup"],
      ["masala molida", "2tablespoons"],
      ["tomato paste", "1can"],
      ["vegetable oil", "2tablespoons"],
    ],
    image: "https://img.spoonacular.com/recipes/642468-556x370.jpg",
    prepTime: 75,
    description:
      'If you have approximately <b>1 hour and 15 minutes</b> to spend in the kitchen, Ethiopian Lentil Curry might be an excellent <b>gluten free and lacto ovo vegetarian</b> recipe to try. One portion of this dish contains about <b>16g of protein</b>, <b>6g of fat</b>, and a total of <b>285 calories</b>. For <b>$1.45 per serving</b>, you get a main course that serves 6. If you have onion, peas, vegetable oil, and a few other ingredients on hand, you can make it. This recipe is typical of Indian cuisine. Only a few people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is excellent. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/spicy-ethiopian-red-lentil-stew-33758">Spicy Ethiopian Red Lentil Stew</a>, <a href="https://spoonacular.com/recipes/misir-wot-ethiopian-red-lentil-stew-1437013">Misir Wot- Ethiopian Red Lentil Stew</a>, and <a href="https://spoonacular.com/recipes/ethiopian-s-mesir-wat-red-lentil-stew-with-ayib-552200">Ethiopian s: Mesir Wat Red Lentil Stew with Ayib</a>.',
    serves: 6,
  },
];
