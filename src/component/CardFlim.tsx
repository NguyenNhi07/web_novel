import FooterCard from "./FooterCard";

function CardFlim() {
  return (
    <>
      <div className="w-[792px] flex flex-col items-center justify-start relative bg-white gap-[27px]">
        <div className="w-full p-5">
          <img
            src="https://onhocuahoai.wordpress.com/wp-content/uploads/2019/05/fullsizeoutput_8fc-e1558958426988.jpeg?w=840"
            alt=""
          />
        </div>

        <div className="w-full px-[70px] text-center flex gap-4 flex-col">
          <span className="w-full text-sm text-[#597532] font-bold">
            REVIEW PHIM
          </span>
          <span className="w-full text-[35px] text-[#666666]">
            [Review Phim] On Your Wedding Day “Ngày Em Đẹp Nhất”
          </span>
          <span className="w-full text-lg text-[#B9B9B9]">
            Đăng vào 27/05/2019
          </span>
        </div>

        <div className="px-[70px] w-full pb-[50px]">
          <div className="bg-[#683d99] p-[10px]">
            <div className="bg-white p-5 rounded-[25px] flex flex-col items-center justify-start">
              <div className="flex flex-col gap-6 mb-6 w-full items-center justify-start text-2xl text-[#683d99]">
                <span>ON YOUR WEDDING DAY (2018)</span>
                <span>‹ Ngày Em Đẹp Nhất ›</span>
              </div>
              <img
                className="w-[190px] h-[190px]"
                src="https://media.giphy.com/media/dVuFWqgjmqO1xa8ONe/giphy.gif"
                alt=""
              />
              <div className="flex flex-col items-start text-lg gap-[6px]">
                <p>
                  📎{" "}
                  <span className="font-bold text-[#683d99]">Tên phim: </span>{" "}
                  On Your Wedding Day (Ngày Em Đẹp Nhất)
                </p>
                <p>
                  📎{" "}
                  <span className="font-bold text-[#683d99]">Điểm IMDb: </span>{" "}
                  <span className="font-bold">6.8</span> (908 votes)
                </p>
                <p>
                  📎{" "}
                  <span className="font-bold text-[#683d99]">Thể loại: </span>
                  phim điện ảnh, tình cảm, hài hước, lãng mạn, SE
                </p>
                <p>
                  📎{" "}
                  <span className="font-bold text-[#683d99]">Diễn viên: </span>
                  Kim Young Kwang trong vai “Hwang Woo Yeon”, Park Bo Young
                  trong vai “Hwan Seung Hee”
                </p>
                <p>
                  📎 <span className="font-bold text-[#683d99]">Nguồn: </span>
                  Moveek + Hóng hớt showbiz
                </p>
              </div>
              <div className="text-lg text-[#B9B9B9] mt-[10px] mb-[27px]">
                Đọc tiếp →
              </div>
            </div>
          </div>
          <FooterCard />
        </div>
      </div>
    </>
  );
}

export default CardFlim;
