// import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export function RecipiePage({ recipie, setShowRecipie }) {
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

      <img src={recipie.image} alt={recipie.name} />
      <h1>{recipie.name}</h1>
      <p>Preparation Time: {recipie.prepTime}</p>
      <p>Serves {recipie.serves}</p>
      <p>Ingredients</p>
      <ul>
        {recipie.ingredients.map((ingredient) => (
          <li key={ingredient[0]}>
            {ingredient[0]} - {ingredient[1]}
          </li>
        ))}
      </ul>
      <p>Summary</p>
      <div dangerouslySetInnerHTML={{ __html: recipie.description }} />
      <button onClick={() => setShowRecipie(false)}>Go Back</button>
    </div>
  );
}
