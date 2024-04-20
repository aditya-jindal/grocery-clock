import { useState } from "react";

export function TrashGrocery({ grocery, setGroceries, setTrash }) {
  const [restoreDays, setRestoreDays] = useState(1);
  const updatedLife = function () {
    const date1 = new Date();
    const differenceInMilliseconds = date1 - grocery.purchaseDate;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays + restoreDays + 1;
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6 px-8 mb-4 w-full flex justify-between">
      <h1 className="text-2xl font-bold mb-2 capitalize">{grocery.name}</h1>
      <div>
        <select
        className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-white font-semibold px-2 py-2 rounded-lg text-xl cursor-pointer"
          value={restoreDays}
          onChange={(e) => setRestoreDays(Number(e.target.value))}
        >
          <option value={1}>1 day</option>
          <option value={2}>2 days</option>
          <option value={3}>3 days</option>
          <option value={4}>4 days</option>
          <option value={5}>5 days</option>
        </select>{" "}
        <button
          onClick={() => {
            setGroceries((groceries) => [
              ...groceries,
              { ...grocery, shelfLife: updatedLife() },
            ]);
            setTrash((trash) => trash.filter((val) => val !== grocery));
          }}
          className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-center text-white font-semibold px-8 py-2 rounded-lg text-xl"
        >
          Restore
        </button>
      </div>
    </div>
  );
}
