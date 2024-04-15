export const tempGroceries = [
  {
    name: "cauliflower",
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
    name: "potato",
    image: "https://i.pravatar.cc/48",
    // qty: 500,
    purchaseDate: new Date("2023-09-22").getTime(),
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
    purchaseDate: new Date("2023-09-20").getTime(),
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
    purchaseDate: new Date("2023-09-11").getTime(),
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
    purchaseDate: new Date("2023-09-11").getTime(),
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
    purchaseDate: new Date("2023-09-11").getTime(),
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
    name: "Alu Gobi Dry",
    ingredients: [
      ["cauliflower", "100g"],
      ["potato", "100g"],
      ["Oil", "2tbsp"],
      ["Salt", "As per taste"],
      ["Red Chilli Powder", "2 spoons"],
    ],
    image: "https://i.pravatar.cc/47",
    prepTime: "25 mins",
  },
  {
    name: "Alu Pyaz Dry",
    ingredients: [
      ["potato", "100g"],
      ["onion", "80g"],
      ["Oil", "2tbsp"],
      ["Salt", "As per taste"],
      ["Red Chilli Powder", "2 spoons"],
    ],
    image: "https://i.pravatar.cc/47",
    prepTime: "15 mins",
  },
  {
    name: "Alu Jeera",
    ingredients: [
      ["potato", "100g"],
      ["Oil", "2tbsp"],
      ["Salt", "As per taste"],
      ["Red Chilli Powder", "2 spoons"],
    ],
    image: "https://i.pravatar.cc/47",
    prepTime: "20 mins",
  },
];
