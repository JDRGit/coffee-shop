import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './components/contexts/CartContext';
import Home from './components/Home';
import Product from './components/Product/Product';
import ProductDetails from './components/Product/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

const products = [
  { id: 1, name: 'Coffee 1', description: 'Delicious coffee' },
  { id: 2, name: 'Coffee 2', description: 'Smooth coffee' },
  { id: 3, name: 'Coffee 3', description: 'Bold coffee' },
];

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<div>{products.map((product) => <Product key={product.id} product={product} />)}</div>} />
            <Route path="product/:id" element={<ProductDetails products={products} />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
