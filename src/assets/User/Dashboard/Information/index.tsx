import UserDashboardSectionLayout from "../_UserDashboardSectionLayout";
import Info from "./Info";

function Information() {
  return (
    <UserDashboardSectionLayout sectionTitle="Information">
      <div className="flex flex-col gap-y-4">
        <p className="text-gray-dark">
          You can choose not to complete the following information, but if you
          decide to apply for a job through CareerHub, we need you to provide
          the following information to complete the application process for
          companies.
        </p>
        <div className="flex flex-col gap-y-8">
          <Info />
        </div>
      </div>
    </UserDashboardSectionLayout>
  );
}

export default Information;
