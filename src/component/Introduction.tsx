import "../Css/introduction.css";
import FooterCard from "./FooterCard";
function Introduction() {
  return (
    <>
      <div className="w-[602px] h-[840px] content flex justify-center">
        <div className="w-[540px] h-[754px] grid-line relative top-11 left-2 flex flex-col justify-center items-start py-[50px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="509"
            height="83"
            viewBox="0 0 509 83"
            fill="none"
            className="absolute top-[-50px] left-3"
          >
            <g clip-path="url(#clip0_14_2)">
              <path
                d="M508.373 41.5498C508.373 3.48739 491.661 0 491.661 0H97.3719L79.5589 15.7431L47.1351 26.5042L21.4163 27.7995V27.8992C19.715 28.497 18.4141 34.3757 18.4141 41.4502C18.4141 48.5246 19.715 54.4034 21.4163 55.0012V55.1008L47.2352 56.3962L79.8591 67.3565L97.472 83H491.761C491.661 83 508.373 79.5126 508.373 41.5498Z"
                fill="#444444"
              />
              <path
                d="M508.372 41.5498C508.372 3.48739 491.659 0 491.659 0H375.574C375.574 0 392.286 3.48739 392.286 41.5498C392.286 79.6122 375.574 83.0996 375.574 83.0996H491.659C491.659 83 508.372 79.5126 508.372 41.5498Z"
                fill="black"
              />
              <path
                d="M508.372 41.5498C508.372 3.48739 491.659 0 491.659 0H375.574C375.574 0 392.286 3.48739 392.286 41.5498C392.286 79.6122 375.574 83.0996 375.574 83.0996H491.659C491.659 83 508.372 79.5126 508.372 41.5498Z"
                fill="#E6E3A7"
              />
              <path
                d="M24.4179 42.7451C24.4179 39.0584 24.0176 35.6707 23.5172 33.1797H21.0154H18.7137H0L9.50697 49.8195H18.2133H22.0161H23.9175C24.2177 47.8267 24.4179 45.3358 24.4179 42.7451Z"
                fill="#F6F798"
              />
              <path
                d="M503.769 70.7444C506.37 63.9689 508.272 54.5031 508.272 41.5499C508.272 28.5968 506.27 19.131 503.769 12.3555H352.858C352.858 12.3555 345.152 22.3195 345.152 41.5499C345.152 60.7804 352.858 70.7444 352.858 70.7444H503.769Z"
                fill="#F6F798"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_2">
                <rect width="508.372" height="83" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div className="flex flex-col px-[60px] justify-center">
            <div className="text-center mb-[27px]">
              <span className="text-[#597532] text-[25px] bg-[rgba(246,247,152,.7)] px-[5px]">
                Phong Hoa Tuyết Nguyệt
              </span>
            </div>

            <div className="p-5 border-[2px] border-dashed border-[#000000] text-lg flex flex-col ">
              <img
                className="mx-[68px]"
                style={{
                  width: "-webkit-fill-available",
                }}
                src="https://media.giphy.com/media/SiGe0HeOxtnc6IR7vE/giphy.gif"
                alt=""
              />
              <div className="flex flex-col items-center gap-[27px]">
                <span className="text-center">
                  Đây là blog của mình, đặt tên là <hr />
                  <span className="font-medium text-[#6749D2]">
                    Phong Hoa Tuyết Nguyệt
                  </span>
                </span>
                <span>
                  Chào mừng đến với{" "}
                  <span className="font-medium text-[#6749D2]">nhà</span> của
                  mình(๑╹◡╹๑)
                </span>
                <span className="mb-[27px]">
                  <span
                    className="font-medium text-[#6749D2] underline"
                    style={{ textDecorationColor: "#6749D2" }}
                  >
                    Phong Hoa Tuyết Nguyệt
                  </span>{" "}
                  (blog) +{" "}
                  <span className="font-medium text-[#6749D2] underline">
                    Instagram
                  </span>
                </span>
              </div>
            </div>
            {/* footer */}
            <FooterCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
