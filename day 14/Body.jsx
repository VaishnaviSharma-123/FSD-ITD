import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";

function Body() {
  const restaurants = [
    { name: "Pizza Hub", cuisine: "Italian", rating: "4.5" },
    { name: "Curry Point", cuisine: "Indian", rating: "4.2" },
    { name: "Sushi Bar", cuisine: "Japanese", rating: "4.8" },
  ];

  return (
    <main className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search restaurants or dishes..." />
      </div>

      <div className="restaurant-container">
        {restaurants.map((res, index) => (
          <RestaurantCard key={index} {...res} />
        ))}
      </div>
    </main>
  );
}

export default Body;
