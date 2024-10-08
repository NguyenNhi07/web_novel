function FooterCard() {
  const sharePage = (platform: any) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=Check%20this%20out!`;
        break;
      case "tumblr":
        shareUrl = `https://www.tumblr.com/share/link?url=${encodeURIComponent(
          url
        )}&name=Check%20this%20out!`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
          url
        )}&media=https://example.com/image.jpg&description=Check%20this%20out!`;
        break;
      case "email":
        shareUrl = `mailto:?subject=Check%20this%20out!&body=${encodeURIComponent(
          url
        )}`;
        break;
      case "repost":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=Check%20this%20out!`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "share-dialog", "width=800,height=600");
  };
  return (
    <>
      <div className="w-full mt-[27px]">
        <div className="w-fit text-[13px] text-[#777777] py-[13px] border-t border-[rgba(0,0,0,0.29)]">
          <span>Nếu thích thì chia sẻ đi nào ๑′ᴗ‵๑</span>
        </div>
        <div className="flex gap-2 mb-4">
          <svg
            onClick={() => sharePage("twitter")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="16" fill="#2AA4F4" />
            <path
              d="M25 9.12824C24.3386 9.49194 23.6274 9.73441 22.8769 9.84929C23.6397 9.28706 24.2269 8.39024 24.5024 7.33035C23.7885 7.84971 22.9975 8.23141 22.1562 8.43259C21.4842 7.54847 20.5256 7 19.4638 7C17.4242 7 15.7706 9.03453 15.7706 11.5434C15.7706 11.8986 15.8043 12.2444 15.867 12.58C12.7984 12.3889 10.0766 10.5778 8.2558 7.82906C7.93599 8.50088 7.75604 9.28706 7.75604 10.1172C7.75604 11.6943 8.40633 13.0829 9.39818 13.9009C8.79267 13.8781 8.22297 13.669 7.72406 13.3334C7.72406 13.3471 7.72406 13.3672 7.72406 13.3868C7.72406 15.5908 8.99735 17.4262 10.6851 17.8439C10.3768 17.9488 10.0506 18.007 9.71458 18.007C9.47622 18.007 9.24382 17.9736 9.01867 17.9234C9.48858 19.7244 10.8518 21.0411 12.4671 21.0802C11.2032 22.2968 9.61139 23.0253 7.88056 23.0253C7.58164 23.0253 7.28911 23.0041 7 22.9607C8.63617 24.2466 10.5777 25 12.662 25C19.4536 25 23.1694 18.0758 23.1694 12.0686C23.1694 11.8716 23.1643 11.6758 23.157 11.482C23.8819 10.8462 24.5066 10.0446 25 9.12824Z"
              fill="url(#paint0_linear_106_585)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_106_585"
                x1="9.74955"
                y1="7.69459"
                x2="25.5037"
                y2="20.3839"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            onClick={() => sharePage("facebook")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="16" fill="#0866FF" />
            <path
              d="M16 7C13.6131 7 11.3239 7.94821 9.63604 9.63604C7.94821 11.3239 7 13.6131 7 16C7 18.3869 7.94821 20.6761 9.63604 22.364C11.3239 24.0518 13.6131 25 16 25C18.3869 25 20.6761 24.0518 22.364 22.364C24.0518 20.6761 25 18.3869 25 16C25 13.6131 24.0518 11.3239 22.364 9.63604C20.6761 7.94821 18.3869 7 16 7Z"
              fill="white"
            />
            <path
              d="M16.8285 18.9888H18.6896L18.9818 16.8386H16.8282V15.6634C16.8282 14.7701 17.0848 13.978 17.8195 13.978H19V12.1016C18.7926 12.0697 18.3539 12 17.525 12C15.7941 12 14.7793 13.0396 14.7793 15.4081V16.8386H13V18.9888H14.7793V24.8988C15.1317 24.9591 15.4886 25 15.855 25C16.1862 25 16.5095 24.9656 16.8285 24.9165V18.9888Z"
              fill="#0866FF"
            />
          </svg>

          <svg
            onClick={() => sharePage("tumblr")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="16" fill="#2C4762" />
            <path
              d="M21.8111 20.6761C21.6949 20.6158 21.5535 20.6217 21.4432 20.6916C20.608 21.2204 19.7614 21.4885 18.9266 21.4885C18.478 21.4885 18.0925 21.392 17.7468 21.1925C17.5117 21.0585 17.2934 20.8242 17.2151 20.6205C17.1392 20.4268 17.14 19.9055 17.1412 19.1841L17.1415 14.785H20.9359C21.1344 14.785 21.2952 14.63 21.2952 14.4388V11.3478C21.2952 11.1567 21.1344 11.0017 20.9359 11.0017H17.1415V7.34615C17.1415 7.15501 16.9807 7 16.7822 7H14.2261C14.0444 7 13.8913 7.13064 13.8693 7.30441C13.7625 8.15103 13.5633 8.85399 13.2766 9.39489C12.997 9.92797 12.6188 10.3919 12.1518 10.7743C11.7776 11.0817 11.1371 11.3791 10.248 11.6583C10.1 11.7048 10 11.8376 10 11.9874V14.4389C10 14.63 10.1608 14.785 10.3593 14.785H12.4402V20.508C12.4402 21.3513 12.533 21.9859 12.7242 22.4483C12.919 22.918 13.2648 23.3603 13.7522 23.7632C14.2316 24.1589 14.8151 24.4684 15.4884 24.6838C16.1411 24.8889 16.6609 25 17.5375 25C18.2784 25 18.9847 24.926 19.637 24.7799C20.2781 24.6358 21.0037 24.3811 21.7937 24.023C21.9197 23.9658 22 23.8439 22 23.7098V20.9809C21.9999 20.8536 21.9274 20.7366 21.8111 20.6761Z"
              fill="white"
            />
          </svg>

          <svg
            onClick={() => sharePage("pinterest")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="16" fill="#CC2127" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0005 7C11.0303 7 7 11.0293 7 16.0005C7 19.6848 9.21627 22.8515 12.3883 24.2432C12.3629 23.6156 12.384 22.8599 12.5438 22.1762C12.7174 21.4459 13.7017 17.2727 13.7017 17.2727C13.7017 17.2727 13.4149 16.698 13.4149 15.8481C13.4149 14.5146 14.1886 13.5186 15.1506 13.5186C15.9688 13.5186 16.3646 14.1335 16.3646 14.8702C16.3646 15.6925 15.8397 16.9234 15.5698 18.0633C15.3443 19.019 16.0482 19.797 16.9901 19.797C18.6952 19.797 19.8435 17.6072 19.8435 15.012C19.8435 13.0402 18.5153 11.5638 16.099 11.5638C13.3694 11.5638 11.6685 13.5991 11.6685 15.8725C11.6685 16.6578 11.8993 17.2103 12.2612 17.6379C12.4285 17.8358 12.4507 17.9141 12.3904 18.1406C12.348 18.3046 12.2485 18.7047 12.2073 18.8624C12.1469 19.09 11.9628 19.1725 11.7575 19.0878C10.499 18.5745 9.91375 17.1976 9.91375 15.6491C9.91375 13.0931 12.0697 10.0259 16.3456 10.0259C19.7822 10.0259 22.0439 12.5142 22.0439 15.1824C22.0439 18.7132 20.0817 21.3507 17.187 21.3507C16.2164 21.3507 15.302 20.8257 14.9887 20.2299C14.9887 20.2299 14.4659 22.3032 14.3558 22.7033C14.1653 23.3965 13.7917 24.0908 13.4498 24.6306C14.2595 24.8698 15.1147 25 16.0005 25C20.9707 25 25 20.9707 25 16.0005C25 11.0293 20.9707 7 16.0005 7Z"
              fill="white"
            />
          </svg>

          <svg
            onClick={() => sharePage("email")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="16" fill="#E9E9E9" />
            <path
              d="M9.25 12.2745L14.4812 15.7458C15.3813 16.3431 16.6187 16.3431 17.5188 15.7458L22.75 12.2744"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.25 10.75H10.75C9.92157 10.75 9.25 11.4216 9.25 12.25V19.75C9.25 20.5784 9.92157 21.25 10.75 21.25H21.25C22.0784 21.25 22.75 20.5784 22.75 19.75V12.25C22.75 11.4216 22.0784 10.75 21.25 10.75Z"
              stroke="black"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex gap-[6px]">
          <div className="py-1 px-[10px] rounded border border-[rgba(216,216,216,1)] flex gap-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
            >
              <path
                d="M3.5 4L6.125 2M6.125 2L8.75 4M6.125 2V11.3333C6.125 12.8061 7.692 14 9.625 14M17.5 12L14.875 14M14.875 14L12.25 12M14.875 14V4.66667C14.875 3.19391 13.308 2 11.375 2"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              onClick={() => sharePage("repost")}
              className="font-medium text-[#2C3338] leading-[17.69px] text-[13px] hover:cursor-pointer"
            >
              Đăng lại
            </span>
          </div>
          <div className="py-1 px-[10px] rounded border border-[rgba(216,216,216,1)] flex gap-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_106_593)">
                <path
                  d="M7 10.5919L3.74981 12.4141L4.37019 8.73732L1.57237 5.88088L5.35719 5.38869L7 1.88693L8.62838 5.38869L12.4005 5.92374L9.62981 8.75088L10.2091 12.4276L7 10.5919ZM14 5.35676L9.17088 4.62L7 0L4.82912 4.62L0 5.35676L3.49344 8.93374L2.66656 14L7 11.6069L11.3334 14L10.5066 8.93374L14 5.35676Z"
                  fill="black"
                />
                <path
                  d="M7 10.5919L3.74981 12.4141L4.37019 8.73732L1.57237 5.88088L5.35719 5.38869L7 1.88693L8.62838 5.38869L12.4005 5.92374L9.62981 8.75088L10.2091 12.4276L7 10.5919ZM14 5.35676L9.17088 4.62L7 0L4.82912 4.62L0 5.35676L3.49344 8.93374L2.66656 14L7 11.6069L11.3334 14L10.5066 8.93374L14 5.35676Z"
                  stroke="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_106_593">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span
              data-href={window.location.href}
              data-width=""
              data-layout="standard"
              data-action="like"
              data-size="small"
              data-share="true"
              className="font-medium text-[#2C3338] leading-[17.69px] text-[13px] hover:cursor-pointer"
            >
              Thích
            </span>
          </div>

          <div className="flex">
            <img
              className="w-[26px] h-[26px] rounded-[50px]"
              src="https://1.gravatar.com/avatar/d6e256191969167794f6eb1fe841a3aad5d2df4b0cdc690b987d805bd81f5b25?s=96&d=monsterid&r=G"
              alt=""
            />
            <img
              className="w-[26px] h-[26px] rounded-[50px]"
              src="https://1.gravatar.com/avatar/17b52733591739ddd3023fd3e054ffdbd1775ba32d40b466b6c4e1e7134c3d0f?s=96&d=monsterid&r=G"
              alt=""
            />
            <img
              className="w-[26px] h-[26px] rounded-[50px]"
              src="https://0.gravatar.com/avatar/f9ca652f1eb1efb4c1c4881d587a13f72aa5ddb5408c9236207900339833fe97?s=96&d=monsterid&r=G"
              alt=""
            />
          </div>

          <div>
            <span className="text-[rgb(28,117,144)] text-xs">4 Likes</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCard;
