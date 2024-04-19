import { Header } from "./Header";
import { Grocery } from "./Grocery";

export function GroceriesList({ groceries, setGroceries, trash, setTrash }) {
  return (
    <div>
      <Header>The Fridge!</Header>

      <div>
        {groceries.map((grocery, index) => (
          <Grocery
            grocery={grocery}
            setGroceries={setGroceries}
            trash={trash}
            setTrash={setTrash}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
