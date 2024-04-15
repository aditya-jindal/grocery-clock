import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { RecipiePage } from "./RecipePage";
import { Recipie } from "./Recipe";

export function RecipiesList({ recipies, setGroceries }) {
  const [showRecipie, setShowRecipie] = useState("");
  return showRecipie ? (
    <div>
      <RecipiePage
        recipie={showRecipie}
        setGroceries={setGroceries}
        setShowRecipie={setShowRecipie}
      />
    </div>
  ) : (
    <div>
      <Header>Explore Recipes</Header>
      <div>
        {recipies.map((recipie) => (
          <Recipie
            recipie={recipie}
            setShowRecipie={setShowRecipie}
            recipies={recipies}
            key={recipie}
          />
        ))}
      </div>
      <div>
        <Link to="/groceries">
          Groceries
          {/* <img
              class="icon-shopping-bag"
              src={require("./img/icon-shopping-bag.png")}
            /> */}
        </Link>
        <Link to="/uploadImg">
          UploadImg
          {/* <img class="icon-camera" src={require("./img/icon-camera.png")} /> */}
        </Link>
      </div>
    </div>
  );
}
