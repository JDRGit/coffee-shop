import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cartItems, checkout } = useContext(CartContext);

  const totalCost = cartItems.length * 5; // Assume each product costs $5

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Cost: ${totalCost}</p>
      <button onClick={checkout}>Purchase</button>
    </div>
  );
};

export default Checkout;
