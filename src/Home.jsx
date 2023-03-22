// Home.js
import { Link } from "react-router-dom";


function Home({ products, handleAddToFavorites }) {
  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
      {products.map((product) => (
            <li key={product.id}>
              {product.name}{" "}
              <button onClick={() => handleAddToFavorites(product)}>
                Add to Favorites
              </button>
            </li>
          ))}
        </ul>
      <Link to="/favorites">View Favorites</Link>
    </div>
  );
}

export default Home;
