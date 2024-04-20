import { Header } from "./Header";
import { TrashGrocery } from "./TrashGrocery";

export function TrashList({ setGroceries, trash, setTrash }) {
  return (
    <div className="w-1/2">
      <Header>The Trash !</Header>{" "}
      {trash.length ? (
        <div>
          {trash.map((grocery, index) => (
            <TrashGrocery
              grocery={grocery}
              setGroceries={setGroceries}
              trash={trash}
              setTrash={setTrash}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p>Wow so many fresh groceries</p>
      )}
    </div>
  );
}
