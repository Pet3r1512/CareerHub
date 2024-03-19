import Page from "@/assets/_UI/Page";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export default function HelpCenter() {
  const data = [
    {
      question: "What is My Applications?",
      answer:
        "My Applications allows you to track the job application process. Depending on the job you have applied for, you may also receive notifications when the employer processes your application.",
    },
    {
      question: "How does My Applications work?",
      answer:
        "My Applications allows you to input details about the jobs you've applied for, including the company name, job title, application status, and any relevant notes. You can update the status of each application as it progresses through the hiring process.",
    },
    {
      question: "What benefits does My Applications offer?",
      answer:
        "My Applications streamlines the job application process by keeping all your application information organized in one place. It helps you stay on top of deadlines, follow-ups, and any communication with employers. Additionally, depending on the job, you may receive notifications regarding changes in your application status, such as when the employer reviews or processes your application.",
    },
    {
      question: "How can I utilize My Applications effectively?",
      answer:
        "To make the most of My Applications, regularly update the status of your job applications as you receive updates from employers. Take advantage of the notes section to jot down any important details or reminders related to each application. Additionally, enable notifications to stay informed about any changes in your application status promptly.",
    },
    {
      question: "Is My Applications available on all devices?",
      answer:
        "Yes, My Applications is accessible on various devices, including desktop computers, laptops, tablets, and smartphones. You can access it through a web browser, ensuring you can manage your job applications anytime, anywhere.",
    },
  ];
  return (
    <Page className="flex flex-col gap-y-4 md:gap-y-24">
      <div className="bg-blue-200 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Help Center</h1>
          <div className="space-y-6">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-400 rounded py-2 px-4 w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
                Search
              </button>

              <div className="faq-item">
                <h2 className="font-semibold text-lg mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-col gap-y-8">
                  {data.map((item) => {
                    return (
                      <div key={item.question}>
                        <p className="text-primary">{item.question}</p>
                        <p>{item.answer}</p>
                        <hr className="my-4 border-t-2 border-gray-400" />

                        <div className="flex items-center space-x-4">
                          <p>Was it helpful?</p>
                          <button className="bg-white hover:bg-blue-500 hover:text-black text-primary px-4 py-2 rounded flex items-center border-[1px] border-gray-dark">
                            <ThumbsUp />
                            <p>Yes</p>
                          </button>
                          <button className="bg-white hover:bg-blue-500 hover:text-black text-primary px-4 py-2 rounded flex items-center border-[1px] border-gray-dark">
                            <ThumbsDown />
                            <p>No</p>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
