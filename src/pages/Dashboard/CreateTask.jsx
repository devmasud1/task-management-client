import axios from "axios";
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "../../hooks/Provider/AuthProvider";
import toast from "react-hot-toast";

const CreateTask = () => {
  const { control, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const SubmitHandler = (data) => {
    const dataToSend = {
      ...data,
      email: user?.email,
    };
    const loadingToast = toast.loading("task creating...");
    axios
      .post(`http://localhost:5000/to-do`, dataToSend)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully task added!", { id: loadingToast });
          reset();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!", err.message);
      });
  };
  
  return (
    <div className="w-full md:w-3/4 mx-auto border-2 p-4 md:p-6 space-y-4">
      <h2 className="text-lg font-bold">Create New Task:</h2>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="title"
                className="input-field"
              />
            )}
          />
        </div>
        <div className="form-control my-2">
          <label htmlFor="description">Description</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                id="description"
                className="input-field"
              ></textarea>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 ">
          <div className="lg:w-1/2 form-control">
            <label htmlFor="deadline">Deadline</label>
            <Controller
              name="deadline"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  id="deadline"
                  className="input-field"
                />
              )}
            />
          </div>
          <div className="lg:w-1/2 form-control">
            <label htmlFor="priority">Priority</label>
            <Controller
              name="priority"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field} id="priority" className="input-field">
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              )}
            />
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
