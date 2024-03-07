import { Button } from "../ui/button";

export default function Profile() {
  const socialChip = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7095 8.62731 27.7224 8.65878 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z"
            fill="#47ACDF"
          />
        </svg>
      ),
      url: "twitter.com/BusinessSolutions",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_53_168)" />
          <path
            d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_53_168"
              x1="16"
              y1="2"
              x2="16"
              y2="29.917"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#18ACFE" />
              <stop offset="1" stop-color="#0163E0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      url: "facebook.com/BusinessSolutions",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1" />
          <path
            d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
            fill="white"
          />
          <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white" />
          <path
            d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
            fill="white"
          />
        </svg>
      ),
      url: "linkedin.com/company/BS",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
            fill="white"
          />
          <path
            d="M22.0513 8.52295L16.0642 13.1954L9.94019 8.52295V8.52421L9.94758 8.53053V15.0732L15.9951 19.8466L22.0513 15.2575V8.52295Z"
            fill="#EA4335"
          />
          <path
            d="M23.6235 7.38639L22.0512 8.52292V15.2575L26.9987 11.459V9.17074C26.9987 9.17074 26.3982 5.90258 23.6235 7.38639Z"
            fill="#FBBC05"
          />
          <path
            d="M22.0512 15.2577V23.9926H25.8432C25.8432 23.9926 26.9223 23.8814 26.9999 22.6514V11.4591L22.0512 15.2577Z"
            fill="#34A853"
          />
          <path
            d="M9.94787 23.9999V15.0731L9.94019 15.0668L9.94787 23.9999Z"
            fill="#C5221F"
          />
          <path
            d="M9.94014 8.52428L8.37646 7.39406C5.60179 5.91025 5 9.17716 5 9.17716V11.4654L9.94014 15.0669V8.52428Z"
            fill="#C5221F"
          />
          <path
            d="M9.94019 8.52417V15.0668L9.94787 15.0731V8.53048L9.94019 8.52417Z"
            fill="#C5221F"
          />
          <path
            d="M5 11.4666V22.6589C5.07646 23.8902 6.15673 24 6.15673 24H9.94877L9.94014 15.0669L5 11.4666Z"
            fill="#4285F4"
          />
        </svg>
      ),
      url: "businesssolutioninc@gmail.com",
    },
  ];

  return (
    <div className="px-2 lg:px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="flex text-2xl">Company Profile</h1>
        <p className=" text-gray-600">
          BusinessSolutions Inc. is a leading provider of comprehensive usiness
          solutions tailored to meet the evolving needs of modern enterprises.
          Established in 2002, our company has garnered a reputation for
          innovation, reliability, and customer-centricity. We specialize in
          offering a wide array of services and products designed to streamline
          operations, optimize processes, and drive sustainable growth for
          businesses across various industries.
        </p>
      </div>
      <div className="h-1 border-t-2"></div>
      <div className="lg:w-1/2 flex flex-col gap-8 w-full">
        <p className="text-2xl">Contact</p>
        <div className="flex flex-wrap lg:flex-row gap-6">
          {socialChip.map((chip, index) => (
            <Button
              key={index}
              className="text-primary lg:text-lg bg-white hover:bg-white border-2 border-primary flex gap-4 py-2 h-fit max-w-full lg:w-fit"
            >
              <span>{chip.icon}</span>
              <p className="truncate ">{chip.url}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
