import Page from "@/assets/_UI/Page";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <Page pageName="Pricing">
      <div className="pt-16 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-y-14 lg:gap-0 md:grid-cols-max"></div>
      <p className="text-[80px] text-center">{`Help you to find the best job`}</p>
      <div className="flex gap-x-4 justify-center w-full mt-20 flex-col lg:flex-row gap-y-5">
        <div className="bg-white border-primary border-2 rounded-lg shadow-md p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Hobby</h2>
            <p className="text-primary text-5xl">$0</p>
            <p className=" mb-5">Start your next side project</p>
            <p className="flex gap-x-2 mb-3 text-gray-700">
              <CheckCircle2 />
              Basic access to all job listings on the website.
            </p>
            <p className="flex gap-x-2 mb-3 text-gray-700">
              <CheckCircle2 />
              Email updates on the latest job postings.
            </p>
            <p className="flex gap-x-2 mb-3 text-gray-700">
              <CheckCircle2 />
              Basic email support.
            </p>
          </div>
          <Button className="w-full text-black bg-white border-2 border-black rounded-lg py-5  hover:text-white hover:border-2">
            Your current plan
          </Button>
        </div>
        <div className="bg-white border-primary border-2 rounded-lg shadow-md p-4 flex-1 flex  justify-between flex-col">
          <div>
            <h2 className="text-xl font-bold mb-2">Pro</h2>
            <div className="flex">
              <p className="text-primary text-5xl">$5</p>
              <p className="px-2 text-gray-500"> per user / month</p>
            </div>
            <p className=" mb-5">
              Everything in Hobby, plus higher limits and team features
            </p>
            <div className="leading-7">
              <p className="flex gap-x-2 mb-3 text-gray-700">
                <CheckCircle2 />
                All features of the Hobby Package.
              </p>
              <p className="flex gap-x-2 mb-3 text-gray-700">
                <CheckCircle2 />
                Priority access to view employer contact information.
              </p>
              <p className="flex gap-x-2 mb-3 text-gray-700">
                <CheckCircle2 />
                {`Access to jobs labeled as "Priority" or "Featured".`}
              </p>
              <p className="flex gap-x-2 mb-3 text-gray-700">
                <CheckCircle2 />
                Priority support via email or live chat.
              </p>
            </div>
          </div>
          <Button className="w-full text-white bg-primary border-2 border-black rounded-lg py-5 hover:text-black hover:border-2 hover:bg-white justify-between">
            Start free 7-days trial <ArrowRight />
          </Button>
        </div>
        <div className="bg-white border-primary border-2 rounded-lg shadow-md p-4 flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Supreme</h2>
            <div className="flex">
              <p className="text-primary text-5xl">$10</p>
              <p className="px-2 text-gray-500"> per user / month</p>
            </div>
            <p className=" mb-5 ">Access to all features</p>
            <p className="flex gap-x-2 mb-3 text-gray-700">
              <CheckCircle2 />
              All features of the Pro Package.
            </p>
            <p className="flex gap-x-2 mb-3 text-gray-700">
              <CheckCircle2 />
              Exclusive access to a curated list of job listings.
            </p>
            <div className="gap-x-2 mb-3 w-full flex text-gray-700">
              <CheckCircle2 />
              <p className="flex-1">
                Ability to mark suitable candidates for jobs and receive
                feedback from employers.
              </p>
            </div>
            <p className="flex gap-x-2 mb-3 text-gray-700">
              <CheckCircle2 />
              24/7 priority support via email, phone, or live chat.
            </p>
          </div>
          <Button className=" w-full text-white bg-primary border-2 border-black rounded-lg py-5 hover:text-black hover:border-2 hover:bg-white justify-between">
            Pay now <ArrowRight />
          </Button>
        </div>
      </div>
      <p className="pt-20 text-center  text-lg tracking-tight text-[#666]">
        {`TRUSTED BY WOLRD'S #1 BOSS`}
      </p>
      <div className="flex flex-1 flex-col lg:flex-row  justify-between gap-16 p-4 mt-10 w-full">
        <p className="border-2 w-full  p-5 rounded-lg border-gray-500">
          <img
            className="h-[50px] mx-auto"
            src="images/Footer/linkedin2.png"
            alt="linkedinLogo"
          />
          <p className="text-7xl text-center font-semibold">98%</p>
          <p className="text-2xl text-[#666] text-center">Job opportunity</p>
        </p>
        <p className="border-2 w-full  p-5 rounded-lg border-gray-500">
          <img
            className="w-[150px] mx-auto"
            src="images/Footer/indeed.png"
            alt="indeedLogo"
          />
          <p className="text-6xl font-semibold text-center pt-4">200+</p>
          <p className="text-2xl text-[#666] text-center pt-2">
            New job every day
          </p>
        </p>
        <p className="border-2 w-full  p-5 rounded-lg border-gray-500">
          <img
            className="w-[170px] mx-auto"
            src="/images/Footer/glassdoor.png"
            alt="glassdoorLogo"
          />
          <p className="text-6xl font-semibold text-center pt-2">5x</p>
          <p className="text-2xl text-[#666] text-center pt-1.5">
            Faster time to get hired.
          </p>
        </p>
        <p className="border-2 w-full rounded-lg border-gray-500 ">
          <img
            className="w-[80px] h-[65px] mx-auto mt-4"
            src="/images/Footer/wwr.png"
            alt="wwrLogo"
          />
          <p className="text-6xl font-semibold text-center ">100%</p>
          <p className="text-2xl text-[#666] text-center pt-1.5">
            Remote job opportunity
          </p>
        </p>
      </div>
    </Page>
  );
}
