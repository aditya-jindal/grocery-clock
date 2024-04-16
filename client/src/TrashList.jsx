import { Header } from "./Header";
import { TrashGrocery } from "./TrashGrocery";

export function TrashList({ setGroceries, trash, setTrash }) {
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
    </div>
  );
}
