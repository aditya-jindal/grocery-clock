import { useEffect, useState } from "react";
import { Header } from "./Header";
import { RecipiePage } from "./RecipePage";
import { Recipie } from "./Recipe";
import Loader from "./Loader";

let SPOONACULAR_API_KEY_1 = import.meta.env.VITE_APP_SPOONACULAR_API_KEY_1;
let SPOONACULAR_API_KEY_2 = import.meta.env.VITE_APP_SPOONACULAR_API_KEY_2;
// const SPOONACULAR_API_KEY_1 = "";
// const SPOONACULAR_API_KEY_2 = "";
// if api keys starts and ends with %, remove them
if (
  SPOONACULAR_API_KEY_1.startsWith("%") &&
  SPOONACULAR_API_KEY_1.endsWith("%")
) {
  SPOONACULAR_API_KEY_1 = SPOONACULAR_API_KEY_1.slice(
    1,
    SPOONACULAR_API_KEY_1.length - 1
  );
}
if (
  SPOONACULAR_API_KEY_2.startsWith("%") &&
  SPOONACULAR_API_KEY_2.endsWith("%")
) {
  SPOONACULAR_API_KEY_2 = SPOONACULAR_API_KEY_2.slice(
    1,
    SPOONACULAR_API_KEY_2.length - 1
  );
}

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const ingredients = sortedGroceries
      .slice(0, 4)
      .map((grocery) => grocery.name)
      .join(",");
    const fetchRecipes = async function () {
      try {
        setLoading(true);
        setError(false);
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
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error:", error);
      }
    };
    !testing && fetchRecipes();
  }, [sortedGroceries, setRecipes, testing]);

  useEffect(() => {
    const getFullRecipe = async function (recipeID) {
      try {
        setLoading(true);
        setError(false);
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
        setLoading(false);
        return ans;
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error:", error);
      }
    };
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(false);
        const fullRecipes = await Promise.all(
          recipeIDs.map((recipeID) => getFullRecipe(recipeID))
        );
        setRecipes(fullRecipes);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
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
    <div className="flex flex-col items-center">
      <Header>Explore Recipes !</Header>
      {!error && loading && <Loader />}
      {/* {Boolean(recipies.length) && error && (
        <p className="text-xl mt-4">There was an error fetching recipes 🥲</p>
      )} */}
      {
        //!error &&
        !loading &&
          (recipies.length ? (
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
            <p className="text-xl mt-4">Upload a receipt to get started 📲</p>
          ))
      }
    </div>
  );
}
