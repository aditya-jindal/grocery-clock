import { Link } from "react-router-dom";
import { Header } from "./Header";
import { TrashGrocery } from "./TrashGrocery";

export function TrashList({ groceries, setGroceries, trash, setTrash }) {
  return (
    <div>
      <Header>The Trash!</Header>{" "}
      <h1 style={{ textAlign: "right" }}>YEETUS DELETUS</h1>
      <div>
        {trash.map((grocery) => (
          <TrashGrocery
            grocery={grocery}
            setGroceries={setGroceries}
            trash={trash}
            setTrash={setTrash}
            key={grocery.name}
          />
        ))}
      </div>
      <div>
        <Link to="/groceries">
          {/* <img
              class="icon-shopping-bag"
              src={require("./img/icon-shopping-bag.png")}
            /> */}
          Groceries
        </Link>
        <Link to="/recipes">
          Recipes
          {/* <img class="icon-home" src={require("./img/icon-home.png")} /> */}
        </Link>
      </div>
    </div>
  );
}
