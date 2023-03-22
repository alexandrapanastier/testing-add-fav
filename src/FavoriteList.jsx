// FavoritesList.js
import React from "react";
import { Link } from "react-router-dom";

function FavoritesList({ favorites, handleRemoveFromFavorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.name}{" "}
            <button onClick={() => handleRemoveFromFavorites(favorite)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
      <Link to="/">Product</Link>
    </div>
  );
}

export default FavoritesList;
