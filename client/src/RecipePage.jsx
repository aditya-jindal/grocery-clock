import { useEffect } from "react";
import { Header } from "./Header";

export function RecipiePage({ recipie, setShowRecipie }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4">
      <Header>Your Cookbook!</Header>
      <button onClick={() => setShowRecipie(false)} className="mb-4 text-blue-400">
        &larr; Go Back
      </button>

      <img src={recipie.image} alt={recipie.name} />
      <h1>{recipie.name}</h1>
      <p>Preparation Time: {recipie.prepTime}</p>
      <p>Serves {recipie.serves}</p>
      <p>Ingredients</p>
      <ul>
        {recipie.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient[0]} - {ingredient[1]}
          </li>
        ))}
      </ul>
      <p>Summary</p>
      <div dangerouslySetInnerHTML={{ __html: recipie.description }} />
    </div>
  );
}
