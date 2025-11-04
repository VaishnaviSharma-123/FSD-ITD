import React from "react";
import "./RestaurantCard.css";

function RestaurantCard({ name, cuisine, rating }) {
  return (
    <div className="restaurant-card">
      <img
        src="https://source.unsplash.com/400x300/?food"
        alt={name}
        className="restaurant-img"
      />
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p className="rating">{rating}</p>
    </div>
  );
}

export default RestaurantCard;
