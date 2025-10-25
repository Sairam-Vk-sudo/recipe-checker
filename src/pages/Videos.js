import React from "react";
import "./Videos.css";

const videosData = [
  {
    id: 1,
    title: "Perfect Spaghetti Carbonara",
    videoUrl: "https://www.youtube.com/embed/qoHnwOHLiMk",
    chef: "Jamie Oliver",
    description: "Learn how to make the perfect Spaghetti Carbonara with Jamie Oliver"
  },
  {
    id: 2,
    title: "Authentic Chicken Biryani",
    videoUrl: "https://www.youtube.com/embed/95BCU1n268w",
    chef: "Ranveer Brar",
    description: "Step by step guide to make authentic Hyderabadi Chicken Biryani"
  },
//   {
//     id: 3,
//     title: "Homemade Sushi Rolls",
//     videoUrl: "https://www.youtube.com/embed/BI3n_zZOqIM",
//     chef: "Just One Cookbook",
//     description: "Master the art of making perfect sushi rolls at home with professional techniques"
//   },
  {
    id: 4,
    title: "Perfect Margherita Pizza",
    videoUrl: "https://www.youtube.com/embed/1-SJGQ2HLp8",
    chef: "Bon Appétit",
    description: "Learn the secrets to making authentic Neapolitan pizza"
  },
  {
    id: 5,
    title: "Classic French Fries",
    videoUrl: "https://www.youtube.com/embed/m6kcANnAJSo",
    chef: "Joshua Weissman",
    description: "Make crispy, restaurant-style French fries at home"
  },
//   {
//     id: 6,
//     title: "Ultimate Chocolate Cake",
//     videoUrl: "https://www.youtube.com/embed/dtyrkTPJdd8",
//     chef: "Preppy Kitchen",
//     description: "Learn to make the most decadent chocolate cake from scratch"
//   },
      {
    id: 7,
    title: "Perfect Pad Thai Recipe",
    videoUrl: "https://www.youtube.com/embed/DsyfYJ5Ou3g",
    chef: "Marion's Kitchen",
    description: "Authentic Pad Thai recipe just like the streets of Bangkok"
  },
//   {
//     id: 8,
//     title: "Authentic Fish Tacos",
//     videoUrl: "https://www.youtube.com/embed/hOd5RCzZhF8",
//     chef: "Food Wishes",
//     description: "Chef John's recipe for crispy fish tacos with special sauce"
//   },
  {
    id: 9,
    title: "Japanese Fluffy Pancakes",
    videoUrl: "https://www.youtube.com/embed/pQGJ7o4oFe0",
    chef: "Cooking with Dog",
    description: "Learn to make those viral jiggly Japanese souffle pancakes"
  },
  {
    id: 10,
    title: "Ultimate Vegetable Stir Fry",
    videoUrl: "https://www.youtube.com/embed/a-Yu8qOAEYQ",
    chef: "Asian Cooking Made Simple",
    description: "Master the art of perfect vegetable stir fry with authentic sauce"
  }
];

const Videos = () => {
  console.log('Videos component rendered');
  console.log('Number of videos:', videosData.length);
  
  return (
    <div className="container">
      <h1 className="page-title">Recipe Videos</h1>
      <div className="videos-grid">
        {videosData.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-container">
              <iframe
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body">
              <h3 className="card-title">{video.title}</h3>
              <p className="chef-name">
                <strong>Chef: </strong>{video.chef}
              </p>
              <p className="description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;