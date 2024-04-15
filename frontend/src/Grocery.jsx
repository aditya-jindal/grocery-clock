export function Grocery({ grocery, setGroceries, setTrash, trash }) {
  const expired = Date.now() > grocery.expiryDate();
  const moveToTrash = function () {
    setTrash((trash) => [...trash, grocery]);
    setGroceries((groceries) => groceries.filter((val) => val !== grocery));
  };
  if (expired) moveToTrash();
  console.log(expired);
  return (
    <div>
      <h1>{grocery.name}</h1>
      {/* <img src={grocery.image} alt={grocery.name} /> */}
      <p>Qty: {grocery.qty}g</p>
      <p>
        Purchased on:{" "}
        {new Date(grocery.purchaseDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        })}
      </p>
      <p>
        Use Within{" "}
        {Math.floor(
          (grocery.expiryDate() - Date.now()) / (1000 * 60 * 60 * 24)
        )}{" "}
        day(s)
        {/* {new Date(grocery.expiryDate()).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            })} */}
      </p>
      <button onClick={() => moveToTrash()}>Trash</button>
    </div>
  );
}
