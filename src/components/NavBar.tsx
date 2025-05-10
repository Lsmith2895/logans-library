import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-4 flex h-20 items-center justify-between border-b bg-black p-4 px-10 text-[#b4e300]">
      <div className="flex items-center">
        <img src="../public/SquareLogo.png" className="w-10" aria-label="logo" />
        <Link to="/">
          <div className="text-4xl font-extrabold text-white">Fallibilism</div>
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="relative focus:outline-none md:hidden"
        onClick={() => setMenuOpen(prev => !prev)}
        type="button"
      >
        <img src="../public/menu.svg" className="h-6 w-6" />
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-4 flex w-36 flex-col rounded-2xl border border-gray-700 bg-black p-4 text-lg md:hidden">
            <Link to="/raw" onClick={() => setMenuOpen(false)} className="p-2">
              Raw Book
            </Link>
            <Link to="/library" className="p-2" onClick={() => setMenuOpen(false)}>
              Pretty Book
            </Link>
          </div>
        )}
      </button>
      {/*  */}

      {/* DeskTop Menu */}
      <div className="hidden space-x-4 text-xl md:flex">
        <Link to="/raw">Raw Book</Link>
        <Link to="/library">Pretty Book</Link>
      </div>
    </nav>
  );
}

export { NavBar };

//  <div className='absolute flex flex-col mt-4 md:hidden right-5 w-24 bg-blue-700'>
