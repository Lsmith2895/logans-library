import { Route, Routes } from 'react-router-dom';
import { RawDataPage } from './pages/RawDataPage';
import { LibraryPage } from './pages/LibraryPage';
import { SearchBar } from './components/SearchBar';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <NavBar />
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
