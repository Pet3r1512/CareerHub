import Image from "next/image";
import Title from "./_title";
import { Suspense } from "react";
import ImageWithLoading from "../_imageWithLoading";

export default function Hero() {
  return (
    <section className="flex justify-between md:items-center relative md:unset lg:min-h-screen w-full mt-4 md:mt-0">
      <Title />
      <Suspense fallback={<>Loading...</>}>
        <div className="w-1/2 [&>p]:unset relative sm:unset hidden md:block lg:!h-screen">
          <ImageWithLoading
            src="https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Hero.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL0hlcm8ucG5nIiwiaWF0IjoxNzAyOTk3Mjc1LCJleHAiOjE3MzQ1MzMyNzV9.p1aKs31GREmrubUD2oE1AMmGDNpGRmh0YeuwdBfMmlo&t=2023-12-19T14%3A47%3A44.808Z"
            priority
            sizes={"100"}
            fill
            className="hidden md:block object-contain !h-fit relative md:unset top-1/2 lg:top-0 my-auto lg:mt-0 !w-full ml-auto"
          />
        </div>
      </Suspense>
      {/* 1829 x 1776 */}
    </section>
  );
}
