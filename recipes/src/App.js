import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Italian");

  const url = `https://api.spoonacular.com/recipes/searchComplex?query=${searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}`;

  const fetchRecipes = async () => {
    try {
      const response = await axios(url);
      setRecipes(response.data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchTerm]);

  const setSearchValue = (searchValue) => {
    console.log(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <RecipeList recipes={recipes} setSearchValue={setSearchValue} />
          }
        />
        <Route path="/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
