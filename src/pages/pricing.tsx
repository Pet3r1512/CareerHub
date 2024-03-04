import Page from "@/assets/_UI/Page";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <p className="pt-20 text-center  text-lg tracking-tight text-[#666] mb-7">
        {`TRUSTED BY WOLRD'S #1 BOSS`}
      </p>
      <div className="graybar  flex w-[200px] h-[2px] border-2 border-gray-150 rounded-full m-auto  "></div>
      <div className="flex flex-1 flex-col lg:flex-row  justify-between gap-16  mt-7 w-full">
        <span className="border-2 w-full  p-5 rounded-lg border-gray-500">
          <img
            className="h-[50px] mx-auto"
            src="images/Footer/linkedin2.png"
            alt="linkedinLogo"
          />
          <p className="text-7xl text-center font-semibold">98%</p>
          <p className="text-2xl text-[#666] text-center">Job opportunity</p>
        </span>
        <span className="border-2 w-full  p-5 rounded-lg border-gray-500">
          <img
            className="w-[150px] mx-auto"
            src="images/Footer/indeed.png"
            alt="indeedLogo"
          />
          <p className="text-6xl font-semibold text-center pt-4">200+</p>
          <p className="text-2xl text-[#666] text-center pt-2">
            New job every day
          </p>
        </span>
        <span className="border-2 w-full  p-5 rounded-lg border-gray-500">
          <img
            className="w-[170px] mx-auto"
            src="/images/Footer/glassdoor.png"
            alt="glassdoorLogo"
          />
          <p className="text-6xl font-semibold text-center pt-2">5x</p>
          <p className="text-2xl text-[#666] text-center pt-1.5">
            Faster time to get hired.
          </p>
        </span>
        <span className="border-2 w-full rounded-lg border-gray-500 ">
          <img
            className="w-[80px] h-[65px] mx-auto mt-4"
            src="/images/Footer/wwr.png"
            alt="wwrLogo"
          />
          <p className="text-6xl font-semibold text-center ">100%</p>
          <p className="text-2xl text-[#666] text-center pt-1.5">
            Remote job opportunity
          </p>
        </span>
      </div>
      <div className="border-2 flex flex-col lg:flex-row mt-7 py-5 pl-5 pr-5 border-gray-500 rounded-lg justify-between">
        <div className="font-semibold flex justify-between py-3">
          Want to get a better job now?{" "}
          <p className="ml-2">
            Pay us and you will have a change to get hire by top tiers companies
            in the world. We are the best job hunting platform
          </p>
        </div>
        <Button className="text-white bg-primary border-2 border-black rounded-lg py-5 hover:text-black hover:border-2 hover:bg-white">
          Contact Sales <ArrowRight />{" "}
        </Button>
      </div>
      <div>
        <h2 className="text-7xl font-bold mt-20 mb-10 text-center">FAQS</h2>
      </div>
      <Accordion type="single" collapsible className="w-full text-xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Where can I purchase a membership package?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            You can purchase membership packages directly on our website through
            a secure and user-friendly payment gateway.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Do I need to create an account to purchase a membership package?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you need to create an account on our website to purchase a
            membership package.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I upgrade or downgrade my membership package after purchase?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes, you can upgrade or downgrade your membership package at any
            time by contacting us via email or the provided phone number on the
            website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I cancel my membership subscription?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes, you can cancel your subscription at any time. However, there
            are no refunds for the time already used.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Can I transfer my membership package to someone else?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            No, your membership package is personal and cannot be transferred to
            another person.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            How will I receive employer contact information with my membership
            package?{" "}
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Premium membership packages will have access to employer contact
            information, while basic membership packages will have lower
            priority access.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Is there an expiration date for membership packages?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes, each membership package has a specific expiration date, and you
            can view details of this expiration when purchasing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            Can I participate in promotions or discounts when purchasing a
            membership package?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Answer: We often have promotions and discounts for membership
            packages. Please check our website or follow us on social media for
            updates on these offers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            Can I request a refund if I'm not satisfied with my membership
            package?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            We do not offer refunds for purchased membership packages. However,
            we always welcome feedback to improve our services.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            How can I contact customer service if I have issues or questions
            about my membership package?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            You can contact us via email, phone, or live chat on the website.
            Our customer support team will be happy to assist you with any
            issues or questions you may have.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Page>
  );
}
