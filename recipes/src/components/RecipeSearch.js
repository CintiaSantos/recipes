import { useState } from "react";

const RecipeSearch = ({ setSearchValue }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitalize">
            search for your favorite{" "}
            <strong className="text-danger">recipe</strong>
          </h1>
          <form className="mt-4">
            <div className="input-group mb-3">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="What do you fancy?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button
                type="submit"
                className="input-group-text green darken-2 text-white"
                onClick={handleSubmit}
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
