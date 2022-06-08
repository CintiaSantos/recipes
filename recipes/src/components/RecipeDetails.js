import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState("pasta");

  const { recipeId } = useParams();

  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

  const fetchRecipe = async () => {
    try {
      const response = await axios(url);
      setRecipe(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Link className="btn btn-primary mb-5 text-capitalize" to="/">
            back to recipe list
          </Link>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="d-block w-100"
          />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <h6 className="text-uppercase font-weight-normal">{recipe.title}</h6>
          <h2 className="mt-3 mb-4">Ingredients</h2>
          <ul className="list-group mt-4">
            {recipe.extendedIngredients &&
              recipe.extendedIngredients.map((item) => {
                return (
                  <li key={item.id} className="list-group-item text-slanted">
                    <div className="md-v-line" />
                    <i className="fas fa-utensils mr-3 p-2 green-text grey lighten-3 rounded-circle" />
                    {item.aisle} - amount: {item.amount}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
