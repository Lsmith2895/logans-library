import { Link, Route, Routes } from 'react-router-dom';
import { RawDataPage } from './pages/RawDataPage';
import { LibraryPage } from './pages/LibraryPage';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <>
      <div>
        <nav className="flex h-30 items-center space-x-10 bg-black p-4 text-white">
          <div className="flex items-center">
            <img src="../public/SquareLogo.png" className="w-10" />
            <div className="font-extrabold text-4xl">Fallibilism</div>
          </div>
          <Link to="/" className='text-xl'>Raw Book</Link>
          <Link to="/library" className='text-xl'>Pretty Book</Link>
        </nav>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RawDataPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
