import { useEffect, useState } from "react";
import FooterCard from "../component/FooterCard";
import FooterPage from "../component/FooterPage";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import "../Css/home.css";
import axios from "axios";
import { Link } from "react-router-dom";

interface Novel {
  name: string;
  author: string;
  link: string;
  linkRv: "https://www.facebook.com/hoinhieuchu/photos/a.2122324254753919/1816025005383847/?type=1&theater";
  type: string;
}

function Ancient() {
  const [novelModern, setNovelModern] = useState<Novel[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/novel_ancient")
      .then((response) => {
        setNovelModern(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const groupedModern = novelModern.reduce((groups, story: Novel) => {
    const firstChar = story.name.charAt(0).toUpperCase();
    if (!groups[firstChar]) {
      groups[firstChar] = [];
    }
    groups[firstChar].push(story);
    return groups;
  }, {} as { [key: string]: Novel[] });

  return (
    <>
      <div className="body-content h-full">
        <Header />
        <div className="flex flex-col xl:flex-row justify-center xl:gap-28 gap-[30px]">
          <div className="flex flex-col items-center">
            <div className="bg-white w-[800px] px-[70px] py-[50px]">
              <div className="w-full">
                <p
                  className="text-[35px] text-[#777777] text-center mb-[27px]
                "
                >
                  Cổ Đại
                </p>

                <div className="p-5 border-2 border-dashed border-[#008000] rounded-[25px] flex flex-col items-center">
                  <p className="mb-6 text-[28px]">List truyện cổ đại đã đọc</p>
                  <img
                    className="w-[50px] h-[50px] mb-6"
                    src="https://nguyettolau.files.wordpress.com/2012/08/958532tvh0n976511.gif?w=80"
                    alt=""
                  />

                  {Object.keys(groupedModern)
                    .sort()
                    .map((letter) => (
                      <div
                        key={letter}
                        className="flex w-full flex-col items-center justify-center"
                      >
                        <span className="text-[28px] mb-6">{letter}</span>
                        {groupedModern[letter].map((story, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-6 w-full"
                          >
                            <p className="whitespace-nowrap text-lg">
                              <Link
                                to={story.link}
                                className="underline hover:no-underline hover:cursor-pointer ml-3"
                              >
                                {story.name}
                              </Link>{" "}
                              - {story.author} |{" "}
                              <Link
                                className="underline hover:no-underline hover:cursor-pointer"
                                to={story.linkRv}
                              >
                                Review
                              </Link>
                            </p>
                            <div className="bg-[#EEEEEE] w-full p-6 mb-6 text-[15px]">
                              <p className="whitespace-nowrap">
                                (Thể loại: {story.type})
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}

                  <img
                    className="w-[136px] h-[76.5px] mb-[27px]"
                    src="https://media.giphy.com/media/fBMsTqv2MtYKqEp6rP/giphy.gif"
                    alt=""
                  />
                </div>
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
