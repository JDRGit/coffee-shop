import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  let { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* You could add more details here like price, quantity, etc. */}
    </div>
  );
};

export default ProductDetails;
