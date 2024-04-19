import { Header } from "./Header";
import { Grocery } from "./Grocery";

export function GroceriesList({ groceries, setGroceries, trash, setTrash }) {
  console.log(groceries);
  const sortedGroceries = groceries.sort(
    (a, b) => a.expiryDate() - b.expiryDate()
  );
  console.log("sortedGroceries");
  console.log(sortedGroceries);
  return (
    <div>
      <Header>The Fridge!</Header>

      <div>
        {sortedGroceries.map((grocery, index) => (
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
