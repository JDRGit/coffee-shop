import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';

const products = [
  { name: 'Coffee 1', description: 'Delicious coffee' },
  { name: 'Coffee 2', description: 'Smooth coffee' },
  { name: 'Coffee 3', description: 'Bold coffee' },
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Coffee Shop</h1>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
