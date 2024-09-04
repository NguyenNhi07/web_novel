import { useEffect, useState } from "react";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";
import axios from "axios";

function Ancient() {
  return (
    <>
      <div className="body-content h-full">
        <Header />
        <div className="flex justify-center gap-28">
          <div className="flex flex-col items-center">
            <div className="bg-white w-[800px] px-[70px] py-[50px]">
              <div className="w-full">
                <p
                  className="text-[35px] text-[#777777] text-center
                "
                >
                  Cổ Đại
                </p>
              </div>
              <FooterCard />
            </div>
            <FooterPage />
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default Ancient;
