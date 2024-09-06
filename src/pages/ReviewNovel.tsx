import { useEffect, useState } from "react";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ReviewNovel() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [rvNovel, setRvNovel] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/review_novel")
      .then((response) => {
        setRvNovel(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const removeDiacritics = (text: any) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

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
                  Review Truyện
                </p>
              </div>

              <div className="mt-[27px] px-[90px]">
                <div className="p-5 border-2 border-dashed border-[#33cccc] rounded-[25px] flex flex-col items-center">
                  <p className="text-[28px] text-[#33CCCC] mb-6">
                    » Review truyện «
                  </p>
                  <img
                    className="w-[246px] h-[23px] mb-6"
                    src="https://nguyettolau.files.wordpress.com/2012/08/div6ag21.gif?w=246"
                    alt=""
                  />

                  {alphabet.map((letter) => {
                    const filteredNovel = rvNovel.filter((item) =>
                      removeDiacritics(item.name).startsWith(letter)
                    );

                    return (
                      <div
                        key={letter}
                        className="mb-6 flex gap-6 w-full flex-col items-center justify-center"
                      >
                        <div className="flex items-center justify-center w-full gap-1">
                          <img
                            className="w-[15px] h-[15px]"
                            src="https://nguyettolau.files.wordpress.com/2012/08/th_nameicon_1472751.gif?w=15"
                            alt=""
                          />
                          <span className="text-[28px] text-[#FF99CC]">
                            {letter}
                          </span>
                          <img
                            className="w-[15px] h-[15px]"
                            src="https://nguyettolau.files.wordpress.com/2012/08/th_nameicon_1472751.gif?w=15"
                            alt=""
                          />
                        </div>
                        {filteredNovel.map((story, index) => (
                          <div key={index} className="whitespace-nowrap">
                            <Link
                              to={story.link}
                              className="text-lg underline hover:no-underline hover:cursor-pointer"
                            >
                              {story.name}
                            </Link>{" "}
                            - <span className="text-lg">{story.author}</span>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  <img
                    className="w-[246px] h-[23px] mb-6"
                    src="https://nguyettolau.files.wordpress.com/2012/08/div6ag21.gif?w=246"
                    alt=""
                  />
                  <p className="mb-[27px] text-lg text-[#33CCCC] font-bold">
                    Nguồn: Sưu Tầm nhiều nơi + Tổng hợp: Thu Hoài
                  </p>
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

export default ReviewNovel;
