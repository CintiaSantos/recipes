import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

const RecipeList = ({ recipes, setSearchValue }) => {
  return (
    <>
    <RecipeSearch
          setSearchValue={setSearchValue}
        />
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">Recipes</h1>
          </div>
        </div>
        <div className="row">
          {recipes &&
            recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
