import Page from "@/assets/_UI/Page";

export default function TermsConditionsPage() {
  return (
    <Page pageName="Terms and Conditions">
      <p className="text-5xl px-4 sm:px-8 lg:px-64 mb-7 mt-10">
        Terms & Conditions
      </p>
      <p className="text-xl  text-justify px-4 sm:px-8 lg:px-64 mb-7 mt-10">
        The specific terms and conditions of a company can vary widely depending
        on the nature of the business, the industry it operates in, and the
        jurisdiction it falls under. However, here are some common elements that
        may be included in the terms and conditions of a company:
      </p>
      <ol className="list-decimal text-justify text-xl px-8 sm:px-16 lg:px-64 mb-2 mt-10 flex flex-col gap-2">
        <li>
          Acceptance of Terms: Users are typically required to agree to the
          terms and conditions before accessing or using the company's services
          or products.
        </li>
        <li>
          Description of Services: A clear description of the services or
          products offered by the company, including any limitations or
          restrictions.
        </li>
        <li>
          User Responsibilities: Outlines the responsibilities of users when
          using the company's services or products, such as providing accurate
          information, complying with laws and regulations, and maintaining the
          security of their accounts.
        </li>
        <li>
          Payment Terms: If applicable, details regarding payment methods,
          pricing, billing cycles, and any applicable taxes or fees.
        </li>
        <li>
          Intellectual Property Rights: Information regarding the ownership of
          intellectual property rights, including copyrights, trademarks, and
          patents, as well as any permissions or licenses granted to users.
        </li>
        <li>
          Privacy Policy: Explains how the company collects, uses, and protects
          user data, including information about cookies, tracking technologies,
          and data sharing practices.
        </li>
        <li>
          Limitation of Liability: Specifies the extent to which the company is
          liable for damages or losses incurred by users, including any
          disclaimers of warranties.
        </li>
        <li>
          Dispute Resolution: Procedures for resolving disputes between the
          company and users, such as arbitration or mediation clauses, and
          jurisdictional considerations.
        </li>
        <li>
          Changes to Terms: The company's right to modify or update the terms
          and conditions, along with any notification procedures for informing
          users of changes.
        </li>
        <li>
          Termination of Services: Circumstances under which the company may
          terminate or suspend access to its services or products, as well as
          any consequences for violating the terms and conditions.
        </li>
      </ol>
      <p className="text-xl text-justify px-4 sm:px-8 lg:px-64 mb-7 mt-10 justify-between">
        It's important for users to carefully read and understand the terms and
        conditions of a company before agreeing to them, as they govern the
        legal relationship between the company and its users.
      </p>
    </Page>
  );
}
