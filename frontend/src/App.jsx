import { useState } from "react";
// import { Login } from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrashList } from "./TrashList";
import { GroceriesList } from "./GroceriesList";
import { RecipiesList } from "./RecipiesList";
import { Login } from "./Login";
import { UploadImg } from "./UploadImg";

const tempGroceries = [
  {
    name: "cauliflower",
    image: "https://i.pravatar.cc/47",
    qty: 250,
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
    qty: 500,
    purchaseDate: new Date("2023-09-12").getTime(),
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
    qty: 750,
    purchaseDate: new Date("2023-09-20").getTime(),
    shelfLife: 12,
    expiryDate: function () {
      const newDate = new Date(this.purchaseDate);
      newDate.setDate(newDate.getDate() + this.shelfLife);
      return newDate.getTime();
    },
  },
];
const tempRecipies = [
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

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [groceries, setGroceries] = useState(tempGroceries);
  const [recipies, setRecipies] = useState(tempRecipies);
  const [trash, setTrash] = useState([]);
  return (
    <div className="App">
      {!isSubmitted ? (
        <Login isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <RecipiesList
                  recipies={recipies}
                  setGroceries={setGroceries}
                ></RecipiesList>
              }
            />
            <Route
              path="recipes"
              element={
                <RecipiesList
                  recipies={recipies}
                  setGroceries={setGroceries}
                ></RecipiesList>
              }
            />
            <Route
              path="groceries"
              element={
                <GroceriesList
                  groceries={groceries}
                  setGroceries={setGroceries}
                  trash={trash}
                  setTrash={setTrash}
                ></GroceriesList>
              }
            />
            <Route
              path="trash"
              element={
                <TrashList
                  groceries={groceries}
                  setGroceries={setGroceries}
                  trash={trash}
                  setTrash={setTrash}
                />
              }
            />
            <Route path="uploadImg" element={<UploadImg />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
