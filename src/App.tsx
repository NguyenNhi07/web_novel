import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListNovel from "./pages/ListNovel";
import ListFilm from "./pages/ListFilm";
import ReviewNovel from "./pages/ReviewNovel";
import ReviewFilm from "./pages/ReviewFilm";
import Ancient from "./pages/Ancient";
import Modern from "./pages/Modern";
import DanQuoc from "./pages/pageListNovel/DanQuoc";
import GuongVoLaiLanh from "./pages/pageListNovel/GuongVoLaiLanh";
import MyThuc from "./pages/pageListNovel/MyThuc";
import HienThuc from "./pages/pageListNovel/HienThuc";
import NuTruy from "./pages/pageListNovel/NuTruy";
import Showbiz from "./pages/pageListNovel/Showbiz";

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
        <Route path="/dan-quoc" element={<DanQuoc />} />
        <Route path="/guong-vo-lai-lanh" element={<GuongVoLaiLanh />} />
        <Route path="/my-thuc" element={<MyThuc />} />
        <Route path="/hien-thuc" element={<HienThuc />} />
        <Route path="/nu-truy" element={<NuTruy />} />
        <Route path="/showbiz" element={<Showbiz />} />
      </Routes>
    </>
  );
}

export default App;
