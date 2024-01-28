import { twMerge } from "tailwind-merge";
import Main from "./_main";
import SubFooter from "./_subFooter";

export default function Footer({ className }: { className?: string }) {
  return (
    <section
      className={twMerge(
        "bg-darkBlue text-white py-12 px-4 lg:px-0",
        className
      )}
    >
      <div className="md:max-w-[100rem] mx-auto">
        <Main />
        <hr className="my-12 block h-[1px] border-0 p-0 border-t-[1px] border-solid border-gray"></hr>
        <SubFooter />
      </div>
    </section>
  );
}
