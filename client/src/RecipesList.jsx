import { useEffect, useState } from "react";
import { Header } from "./Header";
import { RecipiePage } from "./RecipePage";
import { Recipie } from "./Recipe";

const SPOONACULAR_API_KEY = "";
export function RecipiesList({
  recipies,
  setRecipes,
  groceries,
  testing = false,
}) {
  const [showRecipie, setShowRecipie] = useState("");
  const [recipeIDs, setRecipeIDs] = useState([]);

  useEffect(() => {
    const ingredients = groceries.map((grocery) => grocery.name).join(",");
    const fetchRecipes = async function () {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${ingredients}&number=5`
        );
        const data = await response.json();
        setRecipeIDs(() => data.map((recipe) => recipe.id));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    testing && fetchRecipes();
  }, [groceries, setRecipes, testing]);

  useEffect(() => {
    const getFullRecipe = async function (recipeID) {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${SPOONACULAR_API_KEY}&includeNutrition=false&addWinePairing=false&addTasteData=false`
        );
        const data = await response.json();
        // console.log(data);
        const ans = {
          name: data.title,
          ingredients: data.extendedIngredients.map((ingredient) => [
            ingredient.name,
            `${ingredient.amount}${ingredient.unit}`,
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
    testing && fetchRecipes();
  }, [recipeIDs, setRecipes, testing]);

  console.log("recipes:");
  console.log(recipies);
  return showRecipie ? (
    <div>
      <RecipiePage
        recipie={showRecipie}
        // setGroceries={setGroceries}
        setShowRecipie={setShowRecipie}
      />
    </div>
  ) : (
    <div>
      <Header>Explore Recipes!</Header>
      <div className="flex flex-col gap-y-4">
        {recipies.map((recipie) => (
          <Recipie
            recipie={recipie}
            setShowRecipie={setShowRecipie}
            recipies={recipies}
            key={recipie}
          />
        ))}
      </div>
    </div>
  );
}
