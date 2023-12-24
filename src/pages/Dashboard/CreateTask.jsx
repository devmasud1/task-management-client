import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../hooks/Provider/AuthProvider";

const CreateTask = ({ tasks, setTasks }) => {
  const { user } = useContext(AuthContext);

  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    deadline: "",
    priority: "low",
    status: "todo",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value, id: uuidv4() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const updatedTasks = Array.isArray(tasks) ? [...tasks, task] : [task];
    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // setTasks(updatedTasks);

    const sentTaskData = {
      ...task,
      email: user?.email,
    };

    axios.post(`https://task-management-server-ruddy.vercel.app/to-do`, sentTaskData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Task created");
        setTasks([...tasks, sentTaskData]);
      }
    });

    

    setTask({
      id: "",
      name: "",
      description: "",
      deadline: "",
      priority: "low",
      status: "todo",
    });
  };

  return (
    <div className="w-full md:w-3/4 mx-auto border-2 p-4 md:p-6 space-y-4">
      <h2 className="text-lg font-bold">Create New Task:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Task Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={task.name}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-control my-2 mb-2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleInputChange}
            className="input-field"
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="lg:w-1/2 form-control">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={task.deadline}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="lg:w-1/2 form-control">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full md:w-auto"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;