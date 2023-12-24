import ButtonBlock from "../_UI/_button";
import FindJobLocation from "./_findJobLocation";
import FindJobName from "./_findJobName";

export default function SearchBar() {
  return (
    <div className="w-fit flex mx-4 sm:mx-0 lg:items-center gap-y-4 sm:gap-y-2 gap-x-2 flex-col lg:flex-row relative">
      <FindJobName />
      <FindJobLocation />
      <ButtonBlock content="Search" />
    </div>
  );
}
