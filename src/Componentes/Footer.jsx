import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} HorizonteNoticias. Todos los derechos reservados.</p>
        <div className="mt-2">
          <Link to="/" className=" hover:text-black mx-2">
            X Twitter
          </Link>
          <Link to="/" className="text-blue-400 hover:text-blue-600 mx-2">
            Facebook
          </Link>
          <Link to="/" className="text-pink-400 hover:text-pink-600 mx-2">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;