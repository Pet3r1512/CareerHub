import Image from "next/image";
import Title from "./_title";

export default function Hero() {
  return (
    <section className="flex justify-between md:items-center relative md:unset lg:min-h-screen w-full mt-4 md:mt-0">
      <Title />
      <div className="w-1/2 [&>p]:unset relative sm:unset hidden md:block lg:!h-screen">
        <Image
          src="/static/images/hero/Image.png"
          alt=""
          // width={731.6} height={710.4}
          fill
          priority
          sizes="100"
          className="hidden md:block object-contain !h-fit relative md:unset top-1/2 lg:top-0 my-auto lg:mt-0 !w-full ml-auto"
        />
      </div>
      {/* 1829 x 1776 */}
    </section>
  );
}
