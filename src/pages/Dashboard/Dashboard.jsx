import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/Provider/AuthProvider";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import axios from "axios";
// import ToDo from "./ToDo";
// import Ongoing from "./Ongoing";
// import Complete from "./Complete";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(JSON.parse(localStorage.getItem("tasks")));
  // }, []);

  useEffect(() => {
    const fetchToDoList = async () => {
      try {
        const response = await axios.get(
          `https://task-management-server-ruddy.vercel.app/to-do-list/${user.email}`
        );
        setTasks(response.data);
      } catch (error) {
        console.error("something wrong", error);
      }
    };

    if (user && user.email) {
      fetchToDoList();
    }
  }, [user]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" bg-gray-100">
        <div className="w-11/12 mx-auto min-h-[85vh] pt-28">
          <div className="flex">
            <div className="w-1/4 gap-6 ">
            <div className=" border-2 p-2">
              <img
                src={user?.photoURL}
                alt=""
                className="rounded-full w-24 h-24 m-auto"
              />
              <h2 className="text-xl mt-2   text-center m-auto">
               {user?.displayName}
              </h2>
            </div>
          </div>
            <div className="w-full flex">
              <div className="lg:w-1/2">
                <CreateTask tasks={tasks} setTasks={setTasks} />
               
              </div>
              <div className="lg:w-1/2 ">
           
              <div>
              <TaskList tasks={tasks} setTasks={setTasks} />
              </div>
           
            </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Dashboard;
