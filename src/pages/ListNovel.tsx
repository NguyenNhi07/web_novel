import { useEffect, useState } from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import axios from "axios";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import "../Css/home.css";

function ListNovel() {
  const [listNovel, setListNovel] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list_novel")
      .then((response) => {
        setListNovel(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
                  List Truyện
                </p>
              </div>

              <div className="mt-[27px] px-[70px]">
                <div className="p-5 bg-[#F3F0F5] rounded-[25px] border-2 border-dashed border-[#ff99cc]">
                  <div className="p-[10px] m-[10px] bg-[#FFFFFFB3] rounded-[25px] h-[109px] justify-center flex">
                    <img
                      className="w-[353px] h-[88.98px]"
                      src="https://media.giphy.com/media/82wELAuSwnCPY87oAq/giphy.gif"
                      alt=""
                    />
                  </div>

                  <div className="p-[10px] mx-[10px] mb-[10px] bg-[#FFFFFFB3] rounded-[25px] flex flex-col gap-[27px]">
                    {listNovel.map((item, index) => (
                      <div key={index}>
                        <p className="mb-[27px] text-lg font-bold">
                          {item.name}
                        </p>
                        <img
                          src="https://dreamsiscoming.files.wordpress.com/2013/06/60618-tk17.gif?w=840"
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

export default ListNovel;
