// components/ProductCard.js
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <img src={product.mainImage} alt={product.title} />
      <Link href={`/products/${product.id}`} passHref legacyBehavior>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
