import { useEffect, useState } from "react";
import { Header } from "./Header";
import { RecipiePage } from "./RecipePage";
import { Recipie } from "./Recipe";

const SPOONACULAR_API_KEY_1 = import.meta.env.VITE_APP_SPOONACULAR_API_KEY_1;
const SPOONACULAR_API_KEY_2 = import.meta.env.VITE_APP_SPOONACULAR_API_KEY_2;

export function RecipiesList({
  recipies,
  setRecipes,
  groceries,
  testing = false,
}) {
  const [showRecipie, setShowRecipie] = useState("");
  const [recipeIDs, setRecipeIDs] = useState([]);
  const sortedGroceries = groceries.sort(
    (a, b) => a.expiryDate() - b.expiryDate()
  );
  useEffect(() => {
    const ingredients = sortedGroceries
      .slice(0, 4)
      .map((grocery) => grocery.name)
      .join(",");
    const fetchRecipes = async function () {
      try {
        let response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY_1}&ingredients=${ingredients}&number=5&ignorePantry=true&ranking=2`
        );
        if (!response.ok)
          response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY_2}&ingredients=${ingredients}&number=5&ignorePantry=true&ranking=2`
          );
        if (!response.ok) {
          throw new Error("API request failed");
        }
        const data = await response.json();
        setRecipeIDs(() => data.map((recipe) => recipe.id));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    !testing && fetchRecipes();
  }, [sortedGroceries, setRecipes, testing]);

  useEffect(() => {
    const getFullRecipe = async function (recipeID) {
      try {
        let response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${SPOONACULAR_API_KEY_1}&includeNutrition=false&addWinePairing=false&addTasteData=false`
        );
        if (!response.ok) {
          response = await fetch(
            `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${SPOONACULAR_API_KEY_2}&includeNutrition=false&addWinePairing=false&addTasteData=false`
          );
        }
        if (!response.ok) {
          throw new Error("API request failed");
        }
        console.log("fetched");
        const data = await response.json();
        // console.log(data);
        const ans = {
          name: data.title,
          ingredients: data.extendedIngredients.map((ingredient) => [
            ingredient.name,
            `${ingredient.amount} ${ingredient.unit}`,
          ]),
          image: data.image,
          prepTime: data.readyInMinutes,
          description: data.summary,
          serves: data.servings,
        };
        console.log("ans:");
        console.log(ans);
        return ans;
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const fetchRecipes = async () => {
      try {
        const fullRecipes = await Promise.all(
          recipeIDs.map((recipeID) => getFullRecipe(recipeID))
        );
        setRecipes(fullRecipes);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    !testing && fetchRecipes();
  }, [recipeIDs, setRecipes, testing]);

  console.log("recipies:");
  console.log(recipies);
  return showRecipie ? (
    <div className="flex justify-center">
      <RecipiePage recipie={showRecipie} setShowRecipie={setShowRecipie} />
    </div>
  ) : (
    <div>
      <Header>Explore Recipes !</Header>

      {recipies.length ? (
        <div className="flex flex-col gap-y-4">
          {recipies.map((recipie, index) => (
            <Recipie
              recipie={recipie}
              setShowRecipie={setShowRecipie}
              recipies={recipies}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p>Upload a receipt to get started</p>
      )}
    </div>
  );
}
