import React from "react";
import { useParams } from "react-router-dom";

const recipesData = [
    {
      recipe_id: 1,
      title: "Spaghetti Carbonara",
      image_url: "https://source.unsplash.com/400x300/?pasta",
      publisher: "BBC Good Food",
      url: "https://www.bbcgoodfood.com/recipes/ultimate-spaghetti-carbonara-recipe"
    },
    {
      recipe_id: 2,
      title: "Chicken Biryani",
      image_url: "https://source.unsplash.com/400x300/?biryani",
      publisher: "AllRecipes",
      url: "https://www.allrecipes.com/recipe/231286/authentic-chicken-biryani/"
    },
    {
      recipe_id: 3,
      title: "Sushi Rolls",
      image_url: "https://source.unsplash.com/400x300/?sushi",
      publisher: "Just One Cookbook",
      url: "https://www.justonecookbook.com/spicy-tuna-roll/"
    },
    {
      recipe_id: 4,
      title: "Caesar Salad",
      image_url: "https://source.unsplash.com/400x300/?salad",
      publisher: "Food Network",
      url: "https://www.foodnetwork.com/recipes/ina-garten/caesar-salad-recipe-1942019"
    },
    {
      recipe_id: 5,
      title: "Margarita Pizza",
      image_url: "https://source.unsplash.com/400x300/?pizza",
      publisher: "Serious Eats",
      url: "https://www.seriouseats.com/margherita-pizza-recipe"
    },
    {
      recipe_id: 6,
      title: "Beef Steak",
      image_url: "https://source.unsplash.com/400x300/?steak",
      publisher: "Simply Recipes",
      url: "https://www.simplyrecipes.com/recipes/how_to_cook_steak_on_the_stove/"
    },
    {
      recipe_id: 7,
      title: "Pad Thai",
      image_url: "https://source.unsplash.com/400x300/?noodles",
      publisher: "The Spruce Eats",
      url: "https://www.thespruceeats.com/easy-pad-thai-recipe-3217703"
    },
    {
      recipe_id: 8,
      title: "Chocolate Cake",
      image_url: "https://source.unsplash.com/400x300/?cake",
      publisher: "Sally's Baking Addiction",
      url: "https://sallysbakingaddiction.com/triple-chocolate-layer-cake/"
    },
    {
      recipe_id: 9,
      title: "French Fries",
      image_url: "https://source.unsplash.com/400x300/?fries",
      publisher: "Serious Eats",
      url: "https://www.seriouseats.com/perfect-french-fries-recipe"
    },
    {
      recipe_id: 10,
      title: "Tacos",
      image_url: "https://source.unsplash.com/400x300/?tacos",
      publisher: "Mexican Please",
      url: "https://www.mexicanplease.com/authentic-mexican-tacos/"
    },
    {
      recipe_id: 11,
      title: "Tom Yum Soup",
      image_url: "https://source.unsplash.com/400x300/?soup",
      publisher: "Taste of Home",
      url: "https://www.tasteofhome.com/recipes/tom-yum-soup/"
    },
    {
      recipe_id: 12,
      title: "Fish Tacos",
      image_url: "https://source.unsplash.com/400x300/?fish-tacos",
      publisher: "Simply Recipes",
      url: "https://www.simplyrecipes.com/recipes/fish_tacos/"
    },
    {
      recipe_id: 13,
      title: "Pancakes",
      image_url: "https://source.unsplash.com/400x300/?pancakes",
      publisher: "AllRecipes",
      url: "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/"
    },
    {
      recipe_id: 14,
      title: "Vegetable Stir Fry",
      image_url: "https://source.unsplash.com/400x300/?stirfry",
      publisher: "Delish",
      url: "https://www.delish.com/cooking/recipe-ideas/a22553989/best-stir-fry-recipe/"
    },
    {
      recipe_id: 15,
      title: "Fluffy Pancakes",
      image_url: "https://source.unsplash.com/400x300/?fluffy-pancakes",
      publisher: "RecipeTin Eats",
      url: "https://www.recipetineats.com/fluffy-pancakes/"
    }
  ];
  
  

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.recipe_id === parseInt(id, 10));

  if (!recipe) {
    return <h2 className="text-center my-4">Recipe Not Found</h2>;
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">{recipe.title}</h2>
      <img src={recipe.image_url} alt={recipe.title} className="img-fluid" />
      <p><strong>Publisher:</strong> {recipe.publisher}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        View Full Recipe
      </a>
    </div>
  );
};

export default RecipeDetails;
