import { Link } from "react-router-dom";
import FooterCard from "../../component/FooterCard";
import FooterPage from "../../component/FooterPage";
import SideBar from "../../component/SideBar";
import Header from "../../component/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function HienThuc() {
  const [guongVo, setGuongVo] = useState<any[]>([]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/list-guong-vo-lai-lanh")
      .then((response) => {
        setGuongVo(response.data);
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
            <div className="py-[50px] w-[792px] bg-white px-[70px] gap-[27px]">
              <div className="w-full text-center flex gap-4 flex-col">
                <span className="w-full text-sm text-[#597532] font-bold">
                  LIST TRUYỆN
                </span>
                <span className="w-full text-[35px] text-[#666666]">
                  List truyện Hiện Thực
                </span>
                <span className="w-full text-lg text-[#B9B9B9] mb-[27px]">
                  Đăng vào 27/05/2019
                </span>
              </div>

              <div className="w-full p-5 border-[2px] rounded-[25px] border-dashed border-[#FFCC00] flex flex-col items-center justify-center">
                <img
                  className="w-[300px] h-[111px] mb-6"
                  src="https://onhocuahoai.wordpress.com/wp-content/uploads/2018/07/cropped-img_49525.png?w=600"
                  alt=""
                />
                <span className="text-[28px] text-[#FFCC00] mb-6 text-center">
                  Danh sách tổng hợp các tác phẩm ngôn tình theo hướng hiện thực
                  – thực tế
                </span>
                <img
                  className="w-[616px] h-[23.09px] mb-[27px]"
                  src="https://i0.wp.com/i1260.photobucket.com/albums/ii571/rosa_27/Day%20trang%20tri/4f4fb22008a6_zpsd9d7063a.gif"
                  alt=""
                />

                {alphabet.map((letter) => {
                  const filteredNovel = guongVo.filter((item) =>
                    removeDiacritics(item.name).startsWith(letter)
                  );

                  return (
                    <div
                      key={letter}
                      className="mb-6 flex gap-6 w-full flex-col items-center justify-center"
                    >
                      <div className="flex items-center justify-center w-full gap-1">
                        <span className="text-[28px] text-[#FFCC00]">
                          {letter} ♥
                        </span>
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
                  className="w-[616px] h-[23.09px] mb-6"
                  src="https://i0.wp.com/i1260.photobucket.com/albums/ii571/rosa_27/Day%20trang%20tri/4f4fb22008a6_zpsd9d7063a.gif"
                  alt=""
                />
                <p className="mb-[27px] text-lg text-[#FFCC00] font-bold">
                  Nguồn: Hamilk + Bổ sung: Thu Hoài
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

export default HienThuc;
