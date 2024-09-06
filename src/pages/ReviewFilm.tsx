import { useEffect, useState } from "react";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";
import axios from "axios";

interface Film {
  name: string;
  type: string;
  imdb: number;
  votes: number;
}

function ReviewFilm() {
  const [rvFilm, setRvFilm] = useState<Film[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/review_film")
      .then((response) => {
        setRvFilm(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const groupedFilm = rvFilm.reduce((groups, story: Film) => {
    const firstChar = story.name.charAt(0).toUpperCase();
    if (!groups[firstChar]) {
      groups[firstChar] = [];
    }
    groups[firstChar].push(story);
    return groups;
  }, {} as { [key: string]: Film[] });

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
                  Review Phim
                </p>
              </div>

              <div className="mt-[27px] px-[70px]">
                <div className="p-5 bg-[#f5faff]">
                  <div className="p-5 border-2 border-dashed border-[#3f93e8] rounded-[25px] flex flex-col items-center">
                    <img
                      className="w-[355px] h-[55px] mb-[27px]"
                      src="https://nguyettolau.files.wordpress.com/2012/08/loichao.gif?w=355"
                      alt=""
                    />

                    <p className="italic text-lg text-center mb-[27px]">
                      <strong>*Lưu ý: </strong>
                      bài review không phải mình viết, mình chỉ sưu tầm và đăng
                      review những phim mình đã coi và thấy hay
                    </p>
                    {Object.keys(groupedFilm)
                      .sort()
                      .map((letter) => (
                        <div
                          key={letter}
                          className="mb-6 flex w-full flex-col items-center justify-center"
                        >
                          <div className="flex items-center justify-center w-full mb-[21px] gap-1">
                            <img
                              className="w-[15px] h-[15px]"
                              src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-279.gif?w=300&h=300"
                              alt=""
                            />
                            <span className="text-[28px] text-[#3f93e8]">
                              {letter}
                            </span>
                            <img
                              className="w-[15px] h-[15px]"
                              src="https://hungole.files.wordpress.com/2014/10/icon-dong-hungole-blog-279.gif?w=300&h=300"
                              alt=""
                            />
                          </div>
                          {groupedFilm[letter].map((story, index) => (
                            <div key={index} className="flex flex-col gap-3">
                              {index > 0 && (
                                <p className="text-center text-lg mt-6">*</p>
                              )}
                              <p className="text-2xl text-[#3f93e8] underline hover:no-underline hover:cursor-pointer text-center">
                                {story.name}
                              </p>
                              <div className="flex flex-col gap-1">
                                <p className="whitespace-nowrap text-lg text-center">
                                  <span className="text-lg text-[#3f93e8] italic font-bold underline">
                                    Thể loại:{" "}
                                  </span>
                                  {story.type}
                                </p>
                                <p className="whitespace-nowrap text-lg text-center">
                                  <span className="text-lg text-[#3f93e8] italic font-bold underline">
                                    Điểm IMDb:{" "}
                                  </span>
                                  {story.imdb} ({story.votes} votes)
                                </p>
                              </div>
                            </div>
                          ))}
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

export default ReviewFilm;
