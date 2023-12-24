import axios from "axios";
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";

const TaskList = ({ tasks, setTasks }) => {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    const findTodo = tasks?.filter((task) => task.status === "todo");
    const findProgress = tasks?.filter((task) => task.status === "inProgress");
    const findComplete = tasks?.filter((task) => task.status === "complete");

    setTodo(findTodo);
    setInProgress(findProgress);
    setComplete(findComplete);
  }, [tasks]);

  const statuses = ["todo", "inProgress", "complete"];

  return (
    <div className="flex gap-12">
      {statuses?.map((status, idx) => (
        <Section
          key={idx}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todo={todo}
          inProgress={inProgress}
          complete={complete}
        />
      ))}
    </div>
  );
};
export default TaskList;

const Section = ({ status, tasks, setTasks, todo, inProgress, complete }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todo;

  if (status === "inProgress") {
    text = "inProgress";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }
  if (status === "complete") {
    text = "Complete";
    bg = "bg-green-500";
    tasksToMap = complete;
  }
  const addItemToSection = (id) => {
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });

      //   localStorage.setItem("tasks", JSON.stringify(mTasks));
      //   toast("task status change");

      axios.patch(
        `https://task-management-server-ruddy.vercel.app/to-do-status/${id}`,
        { status }
      );
      return mTasks;
    });
  };

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md ${isOver ? "bg-slate-200" : ""}`}
    >
      <Header text={text} bg={bg} count={tasksToMap.length} />{" "}
      {tasksToMap.length > 0 &&
        tasksToMap?.map((task) => (
          <Task
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          ></Task>
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  //   console.log(isDragging);

  const handleRemove = (id) => {
    // const removeTask = tasks.filter((t) => t.id !== id);
    // localStorage.setItem("tasks", JSON.stringify(removeTask));
    // setTasks(removeTask);

    axios
      .delete(
        `https://task-management-server-ruddy.vercel.app/to-do-list-remove/${id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
            
            const updatedTasks = tasks?.filter((t) => t.id !== id);
            console.log(updatedTasks)
            setTasks(updatedTasks);
            toast.success("Task removed");
          }
      });
  };

  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-md cursor-grab ${
        isDragging ? "opacity-25" : "opacity-100"
      }`}
    >
      <p>{task?.name}</p>
      <button
        className="absolute bottom-1 right-1 text-slate-400"
        onClick={() => handleRemove(task.id)}
      >
        X
      </button>
    </div>
  );
};
