import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
      <nav className="flex h-30 items-center justify-between bg-black p-4 px-10 text-[#b4e300]">
          
        <div className="flex items-center">
          <img src="../public/SquareLogo.png" className="w-10" aria-label="logo" />
          <div className="text-4xl font-extrabold text-white">Fallibilism</div>
          </div>

          {/* Hamburger Button */}
          <button
              className='md:hidden focus:outline-none relative'
              onClick={() => setMenuOpen(prev => !prev)}
              type='button'
          >
              <img src='../public/menu.svg' className='w-6 h-6' />
              {/* Mobile Menu */}
          {menuOpen && (
              <div className='absolute flex flex-col mt-4 md:hidden right-0 w-36 p-4 text-lg bg-black'>
                  <Link to='/' onClick={() => setMenuOpen(false)} className=' p-2'> Raw Book </Link>
                  <Link to='/library' className='p-2' onClick={() => setMenuOpen(false)} > Pretty Book </Link>
              </div>
          ) }
          </button>
          {/*  */}
          
          {/* DeskTop Menu */}
        <div className="hidden md:flex space-x-4 text-xl">
          <Link to="/" >
            Raw Book
          </Link>
          <Link to="/library">
            Pretty Book
          </Link>
          </div>

          
          
      </nav>
  );
}

export { NavBar };


//  <div className='absolute flex flex-col mt-4 md:hidden right-5 w-24 bg-blue-700'>