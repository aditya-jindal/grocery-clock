import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TrashList } from "./TrashList";
import { GroceriesList } from "./GroceriesList";
import { RecipiesList } from "./RecipesList";
import { Login } from "./Login";
import { UploadImg } from "./UploadImg";
import { tempGroceries, tempRecipies } from "./test_data";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [groceries, setGroceries] = useState(tempGroceries);
  const [recipies, setRecipies] = useState(tempRecipies);
  const [trash, setTrash] = useState([]);
  return (
    <div className="App">
      {!isSubmitted ? (
        <Login setIsSubmitted={setIsSubmitted} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/recipes" />} />
            <Route
              path="recipes"
              element={
                <RecipiesList
                  recipies={recipies}
                  setRecipes={setRecipies}
                  groceries={groceries}
                  // setGroceries={setGroceries}
                ></RecipiesList>
              }
            />
            <Route
              path="groceries"
              element={
                <GroceriesList
                  groceries={groceries}
                  setGroceries={setGroceries}
                  trash={trash}
                  setTrash={setTrash}
                ></GroceriesList>
              }
            />
            <Route
              path="trash"
              element={
                <TrashList
                  groceries={groceries}
                  setGroceries={setGroceries}
                  trash={trash}
                  setTrash={setTrash}
                />
              }
            />
            <Route
              path="uploadImg"
              element={<UploadImg setGroceries={setGroceries} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
