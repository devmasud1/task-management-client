import { TiDelete } from "react-icons/ti";

const Ongoing = () => {
    return(
        <div>
             <h2 className="bg-slate-500 text-lg  text-center p-1 text-white mb-2">Ongoing</h2>
             <ul>
        <li className="bg-slate-500 text-slate-50 py-1 pl-2 mb-1 flex justify-evenly">
          Task-1
          <button>
            <TiDelete className="text-2xl text-red-200" />{" "}
          </button>
        </li>
        <li className="bg-slate-500 text-slate-50 py-1 pl-2 mb-1 flex justify-evenly">
          Task-2
          <button>
            <TiDelete className="text-2xl text-red-200" />{" "}
          </button>
        </li>
        <li className="bg-slate-500 text-slate-50 py-1 pl-2 mb-1 flex justify-evenly">
          Task-1
          <button>
            <TiDelete className="text-2xl text-red-200" />{" "}
          </button>
        </li>
      </ul>
        </div>
    )}
export default Ongoing;