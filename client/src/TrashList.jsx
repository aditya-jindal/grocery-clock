import { Header } from "./Header";
import { TrashGrocery } from "./TrashGrocery";

export function TrashList({ setGroceries, trash, setTrash }) {
  return (
    <div className="w-1/2 flex flex-col items-center">
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
        <p className="text-xl mt-4 ">Woah so many fresh groceries 😮</p>
      )}
    </div>
  );
}
