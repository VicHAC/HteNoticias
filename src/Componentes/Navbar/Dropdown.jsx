import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Inicio
      </Link>
      <Link to='/Cdmx' className='p-4'>
        Cdmx
      </Link>
      <Link to='/Nacional' className='p-4'>
        Nacional
      </Link>
      <Link to='/Salud' className='p-4'>
        Salud
      </Link>
      <Link to='/Opinion' className='p-4'>
        Opinion
      </Link>
    </div>
  );
};

export default Dropdown;