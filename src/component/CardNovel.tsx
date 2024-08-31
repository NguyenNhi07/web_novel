import FooterCard from "./FooterCard";

function CardNovel() {
  return (
    <>
      <div className="py-[50px] w-[792px] bg-white px-[70px] gap-[27px]">
        <div className="w-full text-center flex gap-4 flex-col">
          <span className="w-full text-sm text-[#597532] font-bold">
            LIST TRUYỆN
          </span>
          <span className="w-full text-[35px] text-[#666666]">
            List truyện Dân Quốc
          </span>
          <span className="w-full text-lg text-[#B9B9B9]">
            Đăng vào 27/05/2019
          </span>
        </div>

        <div className="w-full p-5 border-[2px] rounded-[25px] border-dashed border-[#666699] flex flex-col items-center justify-center">
          <img
            className="w-[300px] h-[111px] mb-6"
            src="https://onhocuahoai.wordpress.com/wp-content/uploads/2018/07/cropped-img_49525.png?w=600"
            alt=""
          />
          <span className="text-[28px] text-[#666699] mb-6">
            Danh sách tổng hợp truyện Dân Quốc
          </span>
          <img
            className="w-[450px] h-[50px] mb-[27px]"
            src="https://nguyettolau.files.wordpress.com/2012/08/201030_1353720519_bmarmgeo.gif?w=450"
            alt=""
          />
          <em className="text-center text-lg mb-[27px]">
            <strong>*Lưu ý:</strong> Dân quốc thường được xếp vào thể loại Cận
            Hiện đại trong văn học ngôn tình. Đó là những truyện hoặc phim lấy
            bối cảnh Trung Hoa Dân quốc những năm đầu thế kỉ 20. Còn hiểu một
            cách nôm na là thời mà đàn ông lúc thì để tóc dài tết đuôi sam, lúc
            thì cắt tóc ngắn mặc tây trang.
          </em>
          <p className="text-lg text-[#B9B9B9] mt-[10px] mb-[27px]">
            Đọc tiếp →
          </p>
        </div>
        <FooterCard />
      </div>
    </>
  );
}

export default CardNovel;
