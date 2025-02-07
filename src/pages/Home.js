import React from "react";
import { Link } from "react-router-dom";

const Home = ({ recipes, getRecipe }) => {
  return (
    <div className="container">
      <h2 className="text-center my-4">Featured Recipes</h2>
      <form onSubmit={getRecipe} className="mb-4 text-center">
        <input type="text" name="recipeName" placeholder="Search recipes..." />
        <button type="submit">Search</button>
      </form>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">By: {recipe.publisher}</p>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/recipes" className="btn btn-success">
          Want More Recipes? Click Here
        </Link>
      </div>
    </div>
  );
};

export default Home;
