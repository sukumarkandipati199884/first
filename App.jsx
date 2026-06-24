import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, description: 'High-quality product', reviews: 4.5 },
    { id: 2, name: 'Product 2', price: 49.99, description: 'Top-notch item', reviews: 4.8 },
    { id: 3, name: 'Product 3', price: 19.99, description: 'Affordable and reliable', reviews: 4.2 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Store</h1>
        <button className="cart-button" onClick={toggleCart}>Cart ({cart.length})</button>
      </header>
      <main>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Reviews: {product.reviews} ★</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      {showCart && (
        <div className="cart-drawer">
          <h2>Your Cart</h2>
          {cart.length === 0 ? <p>Your cart is empty</p> : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          )}
          <button onClick={toggleCart}>Close Cart</button>
        </div>
      )}
    </div>
  );
}

export default App;
