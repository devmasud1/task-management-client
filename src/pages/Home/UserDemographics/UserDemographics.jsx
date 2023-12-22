const UserDemographics = () => {
  const userTypes = [
    {
      type: "Developers",
      content:
        "Our task management platform assists developers in organizing their projects efficiently. With features like task prioritization, deadline management, and drag-and-drop functionality, developers can streamline their workflow and enhance collaboration within their teams.",
    },
    {
      type: "Corporate Professionals",
      content:
        "For corporate professionals handling multiple tasks and projects, our platform offers a centralized solution. Manage tasks seamlessly, track progress, and collaborate with colleagues effortlessly, all in one place. Stay organized and boost productivity with our intuitive task management tool.",
    },
    {
      type: "Bankers",
      content:
        "In the fast-paced banking sector, effective task management is crucial. Our platform provides bankers with a user-friendly interface to handle diverse tasks, track project statuses, and ensure timely completion. Elevate productivity and stay on top of critical assignments effortlessly.",
    },
    {
      type: "Students",
      content:
        "Students juggle various academic tasks and activities. Our task management platform helps students organize assignments, projects, and study schedules efficiently. With features like task categorization and deadline reminders, students can stay focused and manage their workload effectively.",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="w-11/12 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Who Can Benefit from Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-md bg-white"
            >
              <h3 className="text-lg font-medium mb-2">{user.type}</h3>
              <p className="text-gray-700">{user.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UserDemographics;
