import { Link, Route, Routes } from "react-router-dom";
import { RawDataPage } from "./pages/RawDataPage";
import { LibraryPage } from "./pages/LibraryPage";

function App() {
  return (
    <>
      <div>
        <nav>
          <Link to="/" />
          <Link to="/library" />
        </nav>
        <Routes>
          <Route path='/' element={<RawDataPage />} />
          <Route path='/library' element={<LibraryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
