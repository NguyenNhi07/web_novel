import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListNovel from "./pages/ListNovel";
import ListFilm from "./pages/ListFilm";
import ReviewNovel from "./pages/ReviewNovel";
import ReviewFilm from "./pages/ReviewFilm";
import Ancient from "./pages/Ancient";
import Modern from "./pages/Modern";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list-truyen" element={<ListNovel />} />
        <Route path="/list-phim" element={<ListFilm />} />
        <Route path="/review-truyen" element={<ReviewNovel />} />
        <Route path="/review-phim" element={<ReviewFilm />} />
        <Route path="/list-co-dai" element={<Ancient />} />
        <Route path="/list-hien-dai" element={<Modern />} />
      </Routes>
    </>
  );
}

export default App;
