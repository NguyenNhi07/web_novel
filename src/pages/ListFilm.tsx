import { useEffect, useState } from "react";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";
import axios from "axios";

function ListFilm() {
  const [listFilm, setListFilm] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list_phim")
      .then((response) => {
        setListFilm(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="body-content h-full">
        <Header />
        <div className="flex flex-col xl:flex-row justify-center xl:gap-28 gap-[30px]">
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
                  List Phim
                </p>
              </div>

              <div className="mt-[27px] px-[70px]">
                <div className="p-5 bg-[#fff0f7]">
                  <div className="p-5 border-2 border-dashed border-[#000000] rounded-[25px] flex flex-col items-center">
                    <img
                      className="w-[80px] h-[204px] mb-6"
                      src="https://nguyettolau.files.wordpress.com/2012/08/xsgs_16012589661.gif?w=80"
                      alt=""
                    />

                    {listFilm.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-full items-center justify-center flex gap-1 mb-6">
                          <img
                            className="w-5 h-5"
                            src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-476.gif?w=300&h=300"
                            alt=""
                          />
                          <strong className="text-2xl">{item.name}</strong>
                          <img
                            className="w-5 h-5"
                            src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-476.gif?w=300&h=300"
                            alt=""
                          />
                        </div>
                        <img
                          className="w-4 h-4 mb-6"
                          src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-429.gif?w=300&h=300"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
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

export default ListFilm;
