import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TrashList } from "./TrashList";
import { GroceriesList } from "./GroceriesList";
import { RecipiesList } from "./RecipesList";
import { Login } from "./Login";
import { UploadImg } from "./UploadImg";
import { tempGroceries, tempRecipies } from "./test_data";
import NavBar from "./NavBar";

const TESTING = false;

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [groceries, setGroceries] = useState(TESTING ? tempGroceries : []);
  const [recipies, setRecipies] = useState(TESTING ? tempRecipies : []);
  const [trash, setTrash] = useState([]);
  const handleLogout = function () {
    setIsSubmitted(false);
  };
  return (
    <div className="bg-stone-100 flex flex-col items-center w-screen min-h-screen tracking-wide text-stone-700">
      <BrowserRouter>
        <NavBar isSubmitted={isSubmitted} handleLogout={handleLogout} />
        {!isSubmitted ? (
          <Login setIsSubmitted={setIsSubmitted} />
        ) : (
          <Routes>
            <Route index element={<Navigate to="/recipes" />} />
            <Route
              path="recipes"
              element={
                <RecipiesList
                  recipies={recipies}
                  setRecipes={setRecipies}
                  groceries={groceries}
                  testing={TESTING}
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
        )}
      </BrowserRouter>
    </div>
  );
}
