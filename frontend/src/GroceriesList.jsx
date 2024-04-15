import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Grocery } from "./Grocery";

export function GroceriesList({ groceries, setGroceries, trash, setTrash }) {
  return (
    <div>
      <Header>The Fridge!</Header>
      <Link to="/trash">
        {/* <img class="icon-trash" src={require("./img/icon-trash.png")} /> */}
        Trash
      </Link>

      <div>
        {groceries.map((grocery) => (
          <Grocery
            grocery={grocery}
            setGroceries={setGroceries}
            trash={trash}
            setTrash={setTrash}
            key={grocery.name}
          />
        ))}
      </div>
      <div>
        <Link to="/recipes">
          Recipes
          {/* <img class="icon-home" src={require("./img/icon-home.png")} /> */}
        </Link>
      </div>
    </div>
  );
}
