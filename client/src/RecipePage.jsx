// import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function RecipiePage({ recipie, setGroceries, setShowRecipie }) {
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
      <p>Serves 2</p>
      <button onClick={() => setShowRecipie(false)}>Go Back</button>
    </div>
  );
}
