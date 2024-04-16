import { Header } from "./Header";

export function RecipiePage({ recipie, setShowRecipie }) {
  return (
    <div>
      <Header>Your Cookbook!</Header>
      <button onClick={() => setShowRecipie(false)} className="mb-4">
        &larr; Go Back
      </button>

      <img src={recipie.image} alt={recipie.name} />
      <h1>{recipie.name}</h1>
      <p>Preparation Time: {recipie.prepTime}</p>
      <p>Serves {recipie.serves}</p>
      <p>Ingredients</p>
      <ul>
        {recipie.ingredients.map((ingredient) => (
          <li key={ingredient[0]}>
            {ingredient[0]} - {ingredient[1]}
          </li>
        ))}
      </ul>
      <p>Summary</p>
      <div dangerouslySetInnerHTML={{ __html: recipie.description }} />
    </div>
  );
}
