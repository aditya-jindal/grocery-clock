import { Header } from "./Header";
import { TrashGrocery } from "./TrashGrocery";

export function TrashList({ setGroceries, trash, setTrash }) {
  return (
    <div>
      <Header>The Trash !</Header>{" "}
      {/* <h1 style={{ textAlign: "center" }}>YEETUS DELETUS</h1> */}
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
