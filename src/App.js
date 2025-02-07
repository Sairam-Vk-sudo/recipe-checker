import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import RecipesList from "./pages/Recipes";  // Make sure Recipes.js exports RecipesList
import RecipeDetails from "./pages/RecipeDetails"; // Import RecipeDetails separately
import "./App.css";

const localRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://source.unsplash.com/400x300/?pasta",
    publisher: "Italian Delights",
    url: "https://www.example.com/spaghetti-carbonara",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    image: "https://source.unsplash.com/400x300/?biryani",
    publisher: "Spicy Kitchen",
    url: "https://www.example.com/chicken-biryani",
  },
  {
    id: 3,
    title: "Sushi Rolls",
    image: "https://source.unsplash.com/400x300/?sushi",
    publisher: "Japanese Cuisine",
    url: "https://www.example.com/sushi-rolls",
  },
  {
    id: 4,
    title: "Caesar Salad",
    image: "https://source.unsplash.com/400x300/?salad",
    publisher: "Healthy Bites",
    url: "https://www.example.com/caesar-salad",
  },
  {
    id: 5,
    title: "Margarita Pizza",
    image: "https://source.unsplash.com/400x300/?pizza",
    publisher: "Classic Pizzas",
    url: "https://www.example.com/margarita-pizza",
  },
];

class App extends Component {
  state = {
    recipes: localRecipes,
  };

  getRecipe = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value.toLowerCase();

    const filteredRecipes = localRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(recipeName)
    );

    this.setState({ recipes: filteredRecipes });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} getRecipe={this.getRecipe} recipes={this.state.recipes} />}
          />
          <Route path="/about" component={About} />
          <Route exact path="/recipes" component={RecipesList} />
          <Route path="/recipe/:id" component={RecipeDetails} />  
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
