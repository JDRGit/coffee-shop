import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((product) => <CartItem key={product.id} product={product} />)
      ) : (
        <p>No items in cart.</p>
      )}
    </div>
  );
};

export default Cart;
