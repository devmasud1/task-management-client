import { useForm, Controller } from "react-hook-form";
const CreateTask = () => {
    const { control, handleSubmit } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
  };
    return(
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
    )}
export default CreateTask;