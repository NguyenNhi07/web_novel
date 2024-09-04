import { useEffect, useState } from "react";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";
import axios from "axios";

function ReviewFilm() {
  return (
    <>
      <div className="body-content h-full">
        <Header />
        <div className="flex justify-center gap-28">
          <div className="flex flex-col items-center">
            <div className="bg-white w-[800px]">
              <div className="w-full px-[10px] pt-[10px]">
                <img
                  className=""
                  src="https://onhocuahoai.wordpress.com/wp-content/uploads/2018/07/img_2492.png?w=840"
                  alt=""
                />
              </div>

              <div className="pt-[50px] px-[70px]">
                <p
                  className="text-[35px] text-[#777777] text-center
                "
                >
                  Review Phim
                </p>
              </div>

              <div className="mt-[27px] px-[70px]">
                <div className="p-5 bg-[#f5faff]">
                  <div className="p-5 border-2 border-dashed border-[#3f93e8] rounded-[25px] flex flex-col items-center"></div>
                </div>
              </div>
              <div className="px-[70px] pb-[50px]">
                <FooterCard />
              </div>
            </div>
            <FooterPage />
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default ReviewFilm;
