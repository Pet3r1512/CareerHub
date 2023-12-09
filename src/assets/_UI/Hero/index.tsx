import Image from "next/image";
import Title from "./_title";

export default function Hero() {
  return (
    <section className="flex justify-between md:items-center relative lg:min-h-screen w-full mt-4 md:mt-0">
      <Title />
      <div className="w-1/5 lg:w-1/2 [&>p]:unset">
        <Image
          src="/images/hero/Image.png"
          alt=""
          // width={731.6} height={710.4}
          fill
          className="object-contain !h-fit relative top-1/2 my-auto lg:mt-0 !w-1/2 ml-auto"
        />
      </div>
      {/* 1829 x 1776 */}
    </section>
  );
}
