export function Recipie({ recipie, setShowRecipie, recipies }) {
  return (
    <div
      onClick={() =>
        setShowRecipie(...recipies.filter((val) => val.name === recipie.name))
      }
    >
      <h1>{recipie.name}</h1>
      <img src={recipie.image} alt={recipie.name} />
      <p>Preparation Time: {recipie.prepTime} mins</p>
    </div>
  );
}
