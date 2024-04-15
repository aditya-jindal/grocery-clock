import { useState } from "react";

export function TrashGrocery({ grocery, setGroceries, setTrash, trash }) {
  const [restoreDays, setRestoreDays] = useState(1);
  const updatedLife = function () {
    const date1 = new Date();
    const differenceInMilliseconds = date1 - grocery.purchaseDate;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays + restoreDays + 1;
  };
  return (
    <div>
      <h1>{grocery.name}</h1>
      <button
        onClick={() => {
          setGroceries((groceries) => [
            ...groceries,
            { ...grocery, shelfLife: updatedLife() },
          ]);
          setTrash((trash) => trash.filter((val) => val !== grocery));
        }}
      >
        Restore
      </button>
      <select
        value={restoreDays}
        onChange={(e) => setRestoreDays(Number(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
}
