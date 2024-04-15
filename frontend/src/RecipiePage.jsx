import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function RecipiePage({ recipie, setGroceries, setShowRecipie }) {
  const [serving, setServing] = useState(1);

  const recipieQty = function (grocery) {
    const ingredientArray = parseInt(
      recipie.ingredients
        .filter((ingredient) => ingredient[0] === grocery.name)[0]
        ?.at(1)
    );
    return ingredientArray;
  };

  const handleCooking = function () {
    setGroceries((groceries) =>
      groceries.map((grocery) => ({
        ...grocery,
        qty: recipieQty(grocery)
          ? parseInt(grocery.qty) - serving * recipieQty(grocery)
          : grocery.qty,
      }))
    );
  };
  return (
    <div>
      <Header>Your Cookbook!</Header>
      <Link to="/groceries">
        Groceries
        {/* <img
              class="icon-shopping-bag"
              src={require("./img/icon-shopping-bag.png")}
            /> */}
      </Link>

      {/* <img src={recipie.image} alt={recipie.name} /> */}
      <h1>{recipie.name}</h1>
      <p>Preparation Time: {recipie.prepTime}</p>
      <p>Serves </p>
      <select
        value={serving}
        onChange={(e) => setServing(Number(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <div>
        {recipie.ingredients.map((ingredient) => (
          <div key={ingredient[0]}>{`${ingredient[0]} - ${
            parseInt(ingredient[1]) ? parseInt(ingredient[1]) * serving : ""
          }${ingredient[1].slice(
            Math.log10(parseInt(ingredient[1])) + 1
          )}`}</div>
        ))}
      </div>
      <button onClick={handleCooking}>Make this recipie</button>
      <button onClick={() => setShowRecipie(false)}>Go Back</button>
    </div>
  );
}
