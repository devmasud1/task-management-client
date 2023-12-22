import { useContext } from "react";
import { AuthContext } from "../../hooks/Provider/AuthProvider";
import CreateTask from "./CreateTask";
import ToDo from "./ToDo";
import Ongoing from "./Ongoing";
import Complete from "./Complete";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" bg-gray-100">
      <div className="w-11/12 mx-auto min-h-[85vh] pt-28">
        <div className="flex">
          <div className="w-1/4">
            <div>
              <img
                src={user?.photoURL}
                alt=""
                className="rounded-full w-24 h-24 md:w-full md:h-auto md:rounded-3xl"
              />
              <h2 className="text-xl mt-2 text-center md:text-left">
                {user?.displayName}
              </h2>
            </div>
          </div>
          <div className="w-full flex">
            <div className="lg:w-1/2">
              <CreateTask />
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* To do list */}
              <div>
                <ToDo />
              </div>
              {/* ongoing tasks */}
              <div>
                <Ongoing />
              </div>
              {/* Complete tasks */}
              <div>
                <Complete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
