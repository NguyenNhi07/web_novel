import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [review, setReview] = useState<boolean>(false);

  const navigate = useNavigate();
  const navigateListNovel = () => {
    navigate("/list-truyen");
  };
  const navigateListFilml = () => {
    navigate("/list-phim");
  };
  const navigateReviewNovel = () => {
    navigate("/review-truyen");
  };
  const navigateReviewFilm = () => {
    navigate("/review-phim");
  };
  const navigateListAncient = () => {
    navigate("/list-co-dai");
  };
  const navigateListModern = () => {
    navigate("/list-hien-dai");
  };

  return (
    <>
      <div>
        <div className="bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.2)] w-full text-center">
          <button className="py-3 px-4 text-[#2790B0] text-sm">
            Trang chủ{" "}
          </button>
          <button
            onClick={() => navigateListNovel()}
            className="py-3 px-4 text-[#2790B0] text-sm"
          >
            List truyện
          </button>
          <button
            onClick={() => navigateListFilml()}
            className="py-3 px-4 text-[#2790B0] text-sm"
          >
            List phim
          </button>
          <button
            onMouseEnter={() => setReview(true)}
            onMouseLeave={() => setReview(false)}
            className="py-3 px-4 text-[#2790B0] text-sm relative"
          >
            <div className="flex items-center gap-2">
              Review{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.72705 0.690806C0.63265 0.951772 0.63265 1.37436 0.72705 1.63466L2.72858 7.15362C2.91763 7.67556 3.2243 7.67556 3.41335 7.15362L5.42964 1.59469C5.52308 1.33638 5.52429 0.919082 5.43206 0.657446C5.33791 0.390473 5.18275 0.387237 5.08714 0.650207L3.24222 5.738C3.14757 5.99897 2.99435 5.99897 2.89971 5.738L1.06931 0.690806C0.974912 0.429834 0.821693 0.429834 0.72705 0.690806Z"
                  fill="#2790B0"
                />
              </svg>
            </div>
          </button>
          {review && (
            <div className="absolute">
              <input
                type="text"
                placeholder="Department Name"
                className="input-add-item"
              />
              <button className="submit-add-item-button">Add</button>
            </div>
          )}
          <button className="py-3 px-4 text-[#2790B0] text-sm">
            <div className="flex items-center gap-2">
              Truyện đã đọc{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.72705 0.690806C0.63265 0.951772 0.63265 1.37436 0.72705 1.63466L2.72858 7.15362C2.91763 7.67556 3.2243 7.67556 3.41335 7.15362L5.42964 1.59469C5.52308 1.33638 5.52429 0.919082 5.43206 0.657446C5.33791 0.390473 5.18275 0.387237 5.08714 0.650207L3.24222 5.738C3.14757 5.99897 2.99435 5.99897 2.89971 5.738L1.06931 0.690806C0.974912 0.429834 0.821693 0.429834 0.72705 0.690806Z"
                  fill="#2790B0"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="w-full flex justify-center relative mt-[60px]">
          <img
            src="https://onhocuahoai.wordpress.com/wp-content/uploads/2018/11/img_0898.png?w=514"
            alt=""
          />
        </div>
        <div className="w-full text-center text-8xl text-[#731C81] font-medium mb-[65px]">
          Phong Hoa Tuyết Nguyệt
        </div>
      </div>
    </>
  );
}

export default Header;
