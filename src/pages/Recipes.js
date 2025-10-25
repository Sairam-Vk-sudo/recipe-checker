import React from "react";
import { Link } from "react-router-dom";

const recipesData = [
    {
      recipe_id: 1,
      title: "Spaghetti Carbonara",
      image_url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
      publisher: "BBC Good Food",
      url: "https://www.bbcgoodfood.com/recipes/ultimate-spaghetti-carbonara-recipe"
    },
    {
      recipe_id: 2,
      title: "Chicken Biryani",
      image_url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe-500x500.jpg",
      publisher: "AllRecipes",
      url: "https://www.allrecipes.com/recipe/231286/authentic-chicken-biryani/"
    },
    {
      recipe_id: 3,
      title: "Sushi Rolls",
      image_url: "https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg",
      publisher: "Just One Cookbook",
      url: "https://www.justonecookbook.com/spicy-tuna-roll/"
    },
    {
      recipe_id: 4,
      title: "Caesar Salad",
      image_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_Caesar-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1386172636167.jpeg",
      publisher: "Food Network",
      url: "https://www.foodnetwork.com/recipes/ina-garten/caesar-salad-recipe-1942019"
    },
    {
      recipe_id: 5,
      title: "Margarita Pizza",
      image_url: "https://www.seriouseats.com/thmb/UnM1A0Zmk_TBSoTz-rxEe3WTBaE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__05__20160503-spicy-spring-pizza-recipe-37-99227131613a4226a74737b5d9dd7118.jpg",
      publisher: "Serious Eats",
      url: "https://www.seriouseats.com/margherita-pizza-recipe"
    },
    {
      recipe_id: 6,
      title: "Beef Steak",
      image_url: "https://www.simplyrecipes.com/thmb/KqI5nKq3oMv8vxKAydX4Vz0Uf7w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__07__EYF-Pan-Seared-Steak-LEAD-1-21da08ac3fe44079b675c1d9ed4783b9.jpg",
      publisher: "Simply Recipes",
      url: "https://www.simplyrecipes.com/recipes/how_to_cook_steak_on_the_stove/"
    },
    {
      recipe_id: 7,
      title: "Pad Thai",
      image_url: "https://www.thespruceeats.com/thmb/vJzPEpVKYNzS-rd_F5SE_TqB6FA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-pad-thai-recipe-3217703-hero-01-58884de8569544dca465742080609f43.jpg",
      publisher: "The Spruce Eats",
      url: "https://www.thespruceeats.com/easy-pad-thai-recipe-3217703"
    },
    {
      recipe_id: 8,
      title: "Chocolate Cake",
      image_url: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
      publisher: "Sally's Baking Addiction",
      url: "https://sallysbakingaddiction.com/triple-chocolate-layer-cake/"
    },
    {
      recipe_id: 9,
      title: "French Fries",
      image_url: "https://www.seriouseats.com/thmb/Il7mv9YOG3xBkJYrVUYaNjJ18dM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__02__20210201-french-fries-vicky-wasik-8-0760b642ca4d4427b11b0918d2307ded.jpg",
      publisher: "Serious Eats",
      url: "https://www.seriouseats.com/perfect-french-fries-recipe"
    },
    {
      recipe_id: 10,
      title: "Tacos",
      image_url: "https://www.mexicanplease.com/wp-content/uploads/2019/03/Carne-Asada-Tacos-close-1300.jpg",
      publisher: "Mexican Please",
      url: "https://www.mexicanplease.com/authentic-mexican-tacos/"
    },
    {
      recipe_id: 11,
      title: "Tom Yum Soup",
      image_url: "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
      publisher: "Taste of Home",
      url: "https://www.tasteofhome.com/recipes/tom-yum-soup/"
    },
    {
      recipe_id: 12,
      title: "Fish Tacos",
      image_url: "https://www.simplyrecipes.com/thmb/-B9ZZC7PgqRPHJR4TvuX_-CPV7w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__06__fish-tacos-lime-crema-horiz-a-1600-bc71b85e9d334a18b575eb5854e13fad.jpg",
      publisher: "Simply Recipes",
      url: "https://www.simplyrecipes.com/recipes/fish_tacos/"
    },
    {
      recipe_id: 13,
      title: "Pancakes",
      image_url: "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf4289.jpg",
      publisher: "AllRecipes",
      url: "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/"
    },
    {
      recipe_id: 14,
      title: "Vegetable Stir Fry",
      image_url: "https://www.delish.com/content/dam/delish/2019/05/stir-fry-delish-1558546174.jpg",
      publisher: "Delish",
      url: "https://www.delish.com/cooking/recipe-ideas/a22553989/best-stir-fry-recipe/"
    },
    {
      recipe_id: 15,
      title: "Fluffy Pancakes",
      image_url: "https://www.recipetineats.com/wp-content/uploads/2017/04/Fluffy-Japanese-Pancakes_9.jpg",
      publisher: "RecipeTin Eats",
      url: "https://www.recipetineats.com/fluffy-pancakes/"
    }
  ];

const RecipesList = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4">Recipes</h2>
      <div className="row">
        {recipesData.map((recipe) => (
          <div key={recipe.recipe_id} className="col-md-4 mb-4">
            <div className="card">
              <img src={recipe.image_url} alt={recipe.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Publisher: {recipe.publisher}</p>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
