// ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Render more product details as needed */}
    </div>
  );
}

export default ProductDetailPage;
