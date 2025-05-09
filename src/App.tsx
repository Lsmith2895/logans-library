import { Route, Routes } from 'react-router-dom';
import { RawDataPage } from './pages/RawDataPage';
import { LibraryPage } from './pages/LibraryPage';
import { SearchBar } from './components/SearchBar';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { HowToGuide } from './pages/HowToGuide';

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/raw" element={<RawDataPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/guide" element={<HowToGuide />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
