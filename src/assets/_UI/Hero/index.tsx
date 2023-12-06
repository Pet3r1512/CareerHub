import Image from "next/image";
import Title from "./_title";

export default function Hero() {
  return (
    <section className="flex justify-between md:min-h-screen">
      <Title />
      <Image src="/images/hero/Image.png" alt="" width={731.6} height={710.4} />
      {/* 1829 x 1776 */}
    </section>
  );
}
