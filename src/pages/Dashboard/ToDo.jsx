import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AuthContext } from "../../hooks/Provider/AuthProvider";

const ToDo = () => {
  const { user } = useContext(AuthContext);
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const fetchToDoList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/to-do-list/${user.email}`
        );
        setToDoList(response.data);
      } catch (error) {
        console.error("something wrong", error);
      }
    };

    if (user && user.email) {
      fetchToDoList();
    }
  }, [user]);



  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/to-do-list-remove/${taskId}`);

      setToDoList((prevList) => prevList.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("something wrong", error);
    }
  };

  return (
    <div>
      <h2 className="bg-slate-400 text-slate-100 text-lg text-center p-1 mb-2">
        To do
      </h2>
      <ul>
        {toDoList?.map((task, idx) => (
          <li
            className="bg-slate-500 text-slate-50 py-1 pl-2 mb-1 flex justify-between"
            key={idx}
          >
            {task.title}
            <button onClick={() => handleDeleteTask(task._id)}>
              <TiDelete className="text-2xl text-red-200" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
