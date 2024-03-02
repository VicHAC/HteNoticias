import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} HorizonteNoticias. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a href="https://twitter.com/HteNoticias" target="_blank" rel="noopener noreferrer" className=" hover:text-black mx-2">
            X Twitter
          </a>
          <a href="https://www.facebook.com/profile.php?id=61556680932353" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 mx-2">
            Facebook
          </a>
          <a href="https://www.instagram.com/hte_noticias/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
