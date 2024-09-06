import CardFlim from "../component/CardFlim";
import CardNovel from "../component/CardNovel";
import Header from "../component/Header";
import Introduction from "../component/Introduction";
import SideBar from "../component/SideBar";
import "../Css/home.css";

function Home() {
  return (
    <>
      <div className="body-content h-full">
        <Header />
        <div className="flex flex-col xl:flex-row justify-center xl:gap-28 gap-[30px]">
          <div className="flex flex-col gap-[121px] items-center">
            <Introduction />
            <CardFlim />
            <CardNovel />
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default Home;
