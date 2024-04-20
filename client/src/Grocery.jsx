export function Grocery({ grocery, setGroceries, setTrash }) {
  const expired = Date.now() > grocery.expiryDate();
  const moveToTrash = function () {
    setTrash((trash) => [...trash, grocery]);
    setGroceries((groceries) => groceries.filter((val) => val !== grocery));
  };
  if (expired) moveToTrash();
  return (
    <div className="bg-white shadow-md rounded-lg p-6 px-8 mb-4 w-full flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-2 capitalize">{grocery.name}</h1>
        <p className="text-gray-700">
          Use Within:{" "}
          {Math.floor(
            (grocery.expiryDate() - Date.now()) / (1000 * 60 * 60 * 24)
          )}{" "}
          day(s)
        </p>
      </div>
      <button
        onClick={() => moveToTrash()}
        className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-center text-white font-semibold px-8 rounded-lg text-xl"
      >
        Trash 🗑️
      </button>
    </div>
  );
}
