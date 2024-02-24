import { Input } from "@material-tailwind/react";
import Logo from "../_logo";
import ButtonBlock from "../_button";

export default function Main() {
  return (
    <section className="flex md:gap-x-4 gap-y-8 flex-col sm:flex-row flex-wrap justify-between">
      <div className="flex flex-col gap-6 sm:w-[30%] lg:w-1/3">
        <Logo className="text-white" imgClassName="h-40 lg:h-32" />
        <p className="text-gray font-[550]">
          Navigating Your Career Journey with CareerHub.
        </p>
      </div>
      <div className="flex gap-4 lg:gap-10 lg:w-1/3 lg:justify-center">
        <AboutSection />
        <ResourceSection />
      </div>
      <div className="">
        <Subcription />
      </div>
    </section>
  );
}

function AboutSection() {
  const sections = [
    "Companies",
    "Pricing",
    "Terms",
    "Advice",
    "Privacy Policy",
  ];
  return (
    <div>
      <p className="text-white font-bold mb-3 cursor-default">About</p>
      <ul className="flex flex-col gap-2">
        {sections.map((section, index) => {
          return (
            <li
              className="text-gray hover:text-white transition-all duration-75 ease-linear"
              key={index}
            >
              <a href={section.replace(/\s+/g, "-").toLowerCase()}>{section}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ResourceSection() {
  const sections = ["Docs", "Guide", "Updates", "Contact Us"];
  return (
    <div>
      <p className="text-white font-bold mb-3 cursor-default">Resources</p>
      <ul className="flex flex-col gap-2">
        {sections.map((section, index) => {
          return (
            <li
              className="text-gray hover:text-white transition-all duration-75 ease-linears"
              key={index}
            >
              <a href="#">{section}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Subcription() {
  return (
    <section>
      <p className="text-white font-bold mb-6">Get job notifications</p>
      <p className="text-gray font-[550]">
        The latest job news, articles, sent to your inbox weekly.
      </p>
      <div className="flex gap-4 mt-12">
        <Input
          color="white"
          label="Email Address"
          variant="standard"
          crossOrigin={+true}
        />
        <ButtonBlock
          content="Subcribe"
          className="w-1/3 sm:w-full lg:w-[30%]"
        />
      </div>
    </section>
  );
}
