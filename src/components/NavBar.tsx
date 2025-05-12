import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // This effect helps close the menu if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="mb-4 flex h-20 items-center justify-between border-b bg-black p-4 px-10 text-[#b4e300]">
      <div className="flex items-center">
        <img src="../public/SquareLogo.png" className="w-10" aria-label="logo" alt="logo" />
        <Link to="/">
          <div className="text-2xl font-extrabold text-white md:text-4xl">Fallibilism</div>
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="relative md:hidden" ref={menuRef}>
        <button
          className="cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
          type="button"
          data-testid="hamburger-button"
        >
          <img src="../public/menu.svg" className="h-6 w-6" />
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute right-0 mt-4 flex w-36 flex-col rounded-2xl border border-gray-700 bg-black p-4 text-lg md:hidden">
            <Link
              data-testid="hamburger-raw-book"
              to="/raw"
              onClick={() => setMenuOpen(false)}
              className="p-2"
            >
              Raw Book
            </Link>
            <Link to="/library" className="p-2" onClick={() => setMenuOpen(false)}>
              Styled Book
            </Link>
          </div>
        )}
      </div>

      {/* DeskTop Menu */}
      <div className="hidden space-x-4 text-xl md:flex">
        <Link to="/raw">Raw Book</Link>
        <Link to="/library">Styled Book</Link>
      </div>
    </nav>
  );
}

export { NavBar };
