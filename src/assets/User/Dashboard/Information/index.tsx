import UserDashboardSectionLayout from "../_UserDashboardSectionLayout";
import AdditionalDataForm from "./additionalDataForm";
import DataForm from "./dataForm";

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
          <DataForm />
          <AdditionalDataForm />
        </div>
        <p className="text-gray-dark text-right cursor-default">
          ***This information is updated only once a month.
        </p>
      </div>
    </UserDashboardSectionLayout>
  );
}

export default Information;
