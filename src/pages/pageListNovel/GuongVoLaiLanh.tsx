import { Link } from "react-router-dom";
import FooterCard from "../../component/FooterCard";
import FooterPage from "../../component/FooterPage";
import SideBar from "../../component/SideBar";
import Header from "../../component/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function GuongVoLaiLanh() {
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
                  List truyện Dân Quốc
                </span>
                <span className="w-full text-lg text-[#B9B9B9] mb-[27px]">
                  Đăng vào 27/05/2019
                </span>
              </div>

              <div className="w-full p-5 border-[2px] rounded-[25px] border-dashed border-[#666699] flex flex-col items-center justify-center">
                <img
                  className="w-[300px] h-[111px] mb-6"
                  src="https://onhocuahoai.wordpress.com/wp-content/uploads/2018/07/cropped-img_49525.png?w=600"
                  alt=""
                />
                <span className="text-[28px] text-[#800088] mb-6">
                  Danh sách tổng hợp truyện Gương Vỡ Lại Lành
                </span>
                <img
                  className="w-[526px] h-[65px] mb-[27px]"
                  src="https://lh3.googleusercontent.com/proxy/bnclofw-SavPNU3ExCmwBuIko_79qJWo7hCTiXyYEFf_8jVTTQbtndVzJxA-uxi92BIp-ROey1PoWjfEC2JT_G4Rjdw2GeTrsSJddpjg3Gg-XU0kaEd2hjLoKJ2UH0i6OdQj=s0-d"
                  alt=""
                />
                <em className="text-center text-lg mb-[27px]">
                  <strong>*Lưu ý:</strong> Dân quốc thường được xếp vào thể loại
                  Cận Hiện đại trong văn học ngôn tình. Đó là những truyện hoặc
                  phim lấy bối cảnh Trung Hoa Dân quốc những năm đầu thế kỉ 20.
                  Còn hiểu một cách nôm na là thời mà đàn ông lúc thì để tóc dài
                  tết đuôi sam, lúc thì cắt tóc ngắn mặc tây trang.
                </em>
                <div className="border-t w-full"></div>

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
                        <img
                          className="w-[15px] h-[15px]"
                          src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-448.gif?w=300&h=300"
                          alt=""
                        />
                        <span className="text-[28px] text-[#800088]">
                          {letter}
                        </span>
                        <img
                          className="w-[15px] h-[15px]"
                          src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-448.gif?w=300&h=300"
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
                  className="w-[526px] h-[65px] mb-6"
                  src="https://lh3.googleusercontent.com/proxy/bnclofw-SavPNU3ExCmwBuIko_79qJWo7hCTiXyYEFf_8jVTTQbtndVzJxA-uxi92BIp-ROey1PoWjfEC2JT_G4Rjdw2GeTrsSJddpjg3Gg-XU0kaEd2hjLoKJ2UH0i6OdQj=s0-d"
                  alt=""
                />
                <p className="mb-[27px] text-lg text-[#800088] font-bold">
                  Nguồn: Hội lầy của Hàn Vũ Phi + Bổ sung: Thu Hoài
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

export default GuongVoLaiLanh;
