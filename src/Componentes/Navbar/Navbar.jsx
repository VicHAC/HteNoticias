import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center lg:h-20 h-16 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
    >
      <Link to='/' className='md:pl-8'>
        <img src='HteLogo.png' className='lg:w-3/4 md:w-4/6 w-3/5 lg:pl-16 md:pl-8 pl-4'/>
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='p-4'>
          Inicio
        </Link>
        <Link to='/Cdmx' className='p-4'>
          Cdmx
        </Link>
        <Link to='/Nacional' className='p-4'>
          Nacional
        </Link>
        {/*<Link to='/Salud' className='p-4'>
          Salud
        </Link>*/}
        <Link to='/Opinion' className='p-4'>
          Opinion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;