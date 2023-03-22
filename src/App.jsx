// App.js
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  FavoritesList  from './FavoriteList'
import { Route, Routes } from 'react-router-dom';
import  Home  from './Home';

function App() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites'));
    if (favoritesFromStorage) {
      setFavorites(favoritesFromStorage);
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const handleRemoveFromFavorites = (item) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== item.id));
  };

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <div className="App">
      <div>TAKE YOUR FAVORIS</div>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} handleAddToFavorites={handleAddToFavorites} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesList favorites={favorites} handleRemoveFromFavorites={handleRemoveFromFavorites} />}
        />
      </Routes>
    </div>
  )
}

export default App;

