import { Button } from "../ui/button";
import { CompanyURL } from "@/types/company";

export default function Profile({
  description,
  url,
}: {
  description: string;
  url: CompanyURL;
}) {
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
      url: url.twitter && url.twitter,
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
              <stop stopColor="#18ACFE" />
              <stop offset="1" stopColor="#0163E0" />
            </linearGradient>
          </defs>
        </svg>
      ),
      url: url.facebook && url.facebook,
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
      url: url.linkedin && url.linkedin,
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
            d="M16.0007 2.00382C16.0007 2.00382 24.2529 1.63483 28.628 9.8999H15.2985C15.2985 9.8999 12.783 9.81911 10.6342 12.8599C10.0169 14.1363 9.35338 15.451 10.098 18.042C9.02535 16.2313 4.4035 8.21234 4.4035 8.21234C4.4035 8.21234 7.6635 2.33057 16.0006 2.00382H16.0007Z"
            fill="#EF3F36"
          />
          <path
            d="M28.1996 22.9856C28.1996 22.9856 24.3917 30.2935 15.0246 29.9321C16.182 27.9369 21.6911 18.4302 21.6911 18.4302C21.6911 18.4302 23.0222 16.3005 21.452 12.9253C20.6533 11.7528 19.8392 10.5265 17.2159 9.87287C19.3263 9.85377 28.6047 9.87287 28.6047 9.87287C28.6047 9.87287 32.0807 15.6278 28.1996 22.9856Z"
            fill="#FCD900"
          />
          <path
            d="M3.85937 23.0434C3.85937 23.0434 -0.588931 16.1045 4.41101 8.20074C5.56459 10.1959 11.0738 19.7027 11.0738 19.7027C11.0738 19.7027 12.2621 21.9171 15.9773 22.2475C17.3933 22.1438 18.867 22.0554 20.7498 20.1217C19.7118 21.9517 15.0551 29.9476 15.0551 29.9476C15.0551 29.9476 8.3114 30.0707 3.85926 23.0434H3.85937Z"
            fill="#61BC5B"
          />
          <path
            d="M15.0208 30.0013L16.8957 22.2053C16.8957 22.2053 18.9559 22.0437 20.6844 20.1563C19.6118 22.0362 15.0208 30.0013 15.0208 30.0013Z"
            fill="#5AB055"
          />
          <path
            d="M9.71985 16.089C9.71985 12.6523 12.517 9.86523 15.9659 9.86523C19.4149 9.86523 22.212 12.6523 22.212 16.089C22.212 19.5257 19.4149 22.3127 15.9659 22.3127C12.517 22.3089 9.71985 19.5257 9.71985 16.089Z"
            fill="white"
          />
          <path
            d="M10.7653 16.0891C10.7653 13.229 13.0918 10.907 15.966 10.907C18.8363 10.907 21.1666 13.2252 21.1666 16.0891C21.1666 18.9492 18.8403 21.2712 15.966 21.2712C13.0956 21.2712 10.7653 18.9492 10.7653 16.0891Z"
            fill="url(#paint0_linear_1_13599)"
          />
          <path
            d="M28.6008 9.87685L20.881 12.1334C20.881 12.1334 19.7159 10.4303 17.2121 9.87685C19.3841 9.86528 28.6008 9.87685 28.6008 9.87685Z"
            fill="#EACA05"
          />
          <path
            d="M9.94753 17.7577C8.86331 15.8855 4.4035 8.21234 4.4035 8.21234L10.1211 13.848C10.1211 13.848 9.53459 15.0513 9.75459 16.7735L9.94742 17.7577H9.94753Z"
            fill="#DF3A32"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_13599"
              x1="15.9657"
              y1="10.9802"
              x2="15.9657"
              y2="20.9592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#86BBE5" />
              <stop offset="1" stopColor="#1072BA" />
            </linearGradient>
          </defs>
        </svg>
      ),
      url: url.website && url.website,
    },
  ];

  return (
    <div className="px-2 lg:px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="flex text-2xl">Company Profile</h1>
        <p className=" text-gray-600">{description}</p>
      </div>
      <div className="h-1 border-t-2"></div>
      <div className="lg:w-1/2 flex flex-col gap-8 w-full">
        <p className="text-2xl">Contact</p>
        <div className="flex flex-wrap lg:flex-row gap-6">
          {socialChip.map(
            (chip, index) =>
              chip.url && (
                <Button
                  key={index}
                  className="text-primary lg:text-lg bg-white hover:bg-white border-2 border-primary flex gap-4 py-2 h-fit max-w-full lg:w-fit"
                >
                  <span>{chip.icon}</span>
                  <p className="truncate ">{chip.url}</p>
                </Button>
              )
          )}
        </div>
      </div>
    </div>
  );
}
