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
    <div className="w-3/6 flex flex-col items-center">
      <Header>The Fridge !</Header>

      {groceries.length ? (
        <div className="w-full">
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
      ) : (
        <p className="text-xl mt-4">Upload a receipt to get started 📲</p>
      )}
    </div>
  );
}
