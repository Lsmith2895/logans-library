import { Link, Route, Routes } from 'react-router-dom';
import { RawDataPage } from './pages/RawDataPage';
import { LibraryPage } from './pages/LibraryPage';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <>
      <div className="p-4">
        <nav className="bg-blue-900 text-white flex space-x-10 p-4">
          <Link to="/">Raw data page</Link>
          <Link to="/library"> Library Page</Link>
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
