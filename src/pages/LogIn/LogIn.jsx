import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const LogIn = () => {
  const { GoogleLogIn, signInUser } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const loadingToast = toast.loading("Logging...");
    signInUser(email, password)
      .then(() => {
        toast.success("Login successful", { id: loadingToast });
      })
      .catch((err) => {
        toast.error("something wrong!", err.message);
      });
    form.reset();
  };

  const handleGoogleLogIn = () => {
    const loadingToast = toast.loading("Logging...");
    GoogleLogIn()
      .then((res) => {
        toast.success("Login successful", { id: loadingToast });
        console.log(res)
      })
      .catch((err) => {
        toast.error("something wrong!", err.message);
      });
  };

  return (
    <div className="min-h-[85vh]">
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="w-11/12 mx-auto hero-content">
          <div className="card shrink-0 lg:w-1/2 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-sky-600">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                  autoComplete="current-email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
              <button
                onClick={handleGoogleLogIn}
                className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              >
                Log in with Google
              </button>

              <label className="label">
                <p className="label-text-alt ">
                  create an account?{" "}
                  <Link to="/signUp" className="link link-hover">
                    SignUp
                  </Link>
                </p>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
