"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carrito from '../public/img/carrito.png';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Almohadillas Impresora Epson L120 L210 L355 L375 L380 L455',
    price: '$4.990',
    image: '/img/almohadillas2.png',
    available: true,
    rating: 5,
  },
  {
    id: 2,
    name: 'Almohadillas Para Epson L4150 L4160 L6160 L6168 L6170',
    price: '$9.990',
    image: '/img/almohadillas3.png',
    available: true,
    rating: 5,
  },
  {
    id: 3,
    name: 'Almohadillas Para Impresora Epson L5190 L3210 L3250 L5290',
    price: '$5.990',
    image: '/img/almohadillas1.png',
    available: true,
    rating: 5,
  },
  {
    id: 3,
    name: 'Almohadillas Para Epson L800 L805',
    price: '$5.990',
    image: '/img/almohadillas4.png',
    available: true,
    rating: 5,
  }

];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="py-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full"
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
              <p className="text-green-500">{product.available ? 'Disponible' : 'No disponible'}</p>
              <div className="flex items-center mt-2 mb-4">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .587l3.668 7.431 8.167 1.182-5.897 5.744 1.389 8.087L12 18.897l-7.327 3.834 1.389-8.087L.74 9.2l8.167-1.182z" />
                    </svg>
                  ))}
              </div>
              <p className="text-lg font-semibold">{product.price}</p>
              <button className="bg-purple-500 text-white rounded-full p-2 mt-4">
                <Image src={carrito} alt="Carrito" width={20} height={20} />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
