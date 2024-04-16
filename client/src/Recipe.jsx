export function Recipie({ recipie, setShowRecipie, recipies }) {
  return (
    <div
      onClick={() =>
        setShowRecipie(...recipies.filter((val) => val.name === recipie.name))
      }
      className="flex border-2 border-black mx-3 rounded-xl justify-between cursor-pointer"
    >
      <img
        src={recipie.image}
        alt={recipie.name}
        className="object-contain w-1/6 rounded-l-xl ml-0"
      />
      <div className="flex flex-col gap-y-2 w-5/6 px-6 py-2">
        <h1 className="text-2xl font-semibold">{recipie.name}</h1>
        <p>Preparation Time: {recipie.prepTime} mins</p>
      </div>
    </div>
  );
}
