import { Button } from "../ui/button";

export default function Profile() {
  return (
    <div>
      <p className="text-2xl mt-10 w-[800px]">Company Profile</p>
      <p className="text-xl mt-8 w-[800px]">
        BusinessSolutions Inc. is a leading provider of comprehensive usiness
        solutionsj tailored to meet the evolving needs of modern enterprises.
        Established in 2002, our company has garnered a reputation for
        innovation, reliability, and customer-centricity. We specialize in
        offering a wide array of services and products designed to streamline
        operations, optimize processes, and drive sustainable growth for
        businesses across various industries.
      </p>
      <div className=" mt-10 border-t-2 w-[800px]">
        <p className="text-2xl mt-10 w-[800px]">Contact</p>
      </div>
      <div className="flex gap-8 mt-8">
        <Button className="text-primary text-xl bg-white hover:bg-white gap-x-2 border-2 border-primary">
          <span className="hidden lg:block">twitter.com/BusinessSolutions</span>
        </Button>
        <Button className="text-primary text-xl bg-white hover:bg-white border-2 border-primary gap-x-2">
          <span className="hidden lg:block">
            facebook.com/BusinessSolution Inc
          </span>
        </Button>
      </div>
      <div className="flex gap-8 mt-3">
        <Button className="text-primary text-xl bg-white hover:bg-white gap-x-2 border-2 border-primary">
          <span className="hidden lg:block">linkedin.com/company/BS</span>
        </Button>
        <Button className="text-primary text-xl bg-white hover:bg-white border-2 border-primary gap-x-2">
          <span className="hidden lg:block">businesssolutioninc@gmail.com</span>
        </Button>
      </div>
    </div>
  );
}
