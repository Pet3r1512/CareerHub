import Image from "next/image";

export default function SubFooter() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4 items-center">
      <p className="font-semibold">2023 @CareerHub. All rights reserved.</p>
      <div className="flex items-center gap-2">
        <Image
          src="/images/Footer/facebook.png"
          alt="Facebook"
          width={24}
          height={24}
        />
        <Image
          src="/images/Footer/reddit.png"
          alt="Reddit"
          width={24}
          height={24}
        />
        <Image
          src="/images/Footer/google.png"
          alt="Google"
          width={24}
          height={24}
        />
        <Image
          src="/images/Footer/twitter.png"
          alt="Twitter"
          width={24}
          height={24}
        />
        <Image
          src="/images/Footer/linkedin.png"
          width={24}
          height={24}
          alt="Linkedin"
        />
      </div>
    </div>
  );
}
