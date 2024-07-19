// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">NEXOCOMP</h1>
        <input 
          type="text"
          placeholder="Buscar productos..."
          className="p-2 border rounded w-1/2 text-black"
        />
        <div className="flex items-center">
          <button className="p-2 border rounded text-black">Mi cuenta</button>
          <button className="flex items-center ml-4 p-2 border rounded text-black">
            <span className="mr-2 text-black">$137.980</span>
            <img src="/img/carrito.png" alt="Carrito de compras" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <nav className="bg-gray-200 p-2 mt-2">
        <div className="container mx-auto flex justify-between space-x-4">
          <Link href="/" passHref legacyBehavior>
            <a className="text-lg text-black">Inicio</a>
          </Link>
          <Link href="/products" passHref legacyBehavior>
            <a className="text-lg text-black">Productos</a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-lg text-black">Contacto</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
