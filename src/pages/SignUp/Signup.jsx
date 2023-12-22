import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../hooks/Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(imageUrl)

    createUser(email, password, name, imageUrl)
      .then(() => {
        const loadingToast = toast.loading("Logging...");
        toast.success("Login successful", { id: loadingToast });
      })
      .catch((err) => {
        toast.error("already used this email!", err.message);
      });
    form.reset();
  };

  return (
    <div className=" min-h-[85vh]">
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="w-11/12 mx-auto hero-content">
          <div className="card shrink-0 lg:w-1/2 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-sky-600">
                SignUp now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                  autoComplete="current-name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Your photo"
                  className="input input-bordered"
                  required
                  autoComplete="current-photoUrl"
                />
              </div>
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
                  create account
                </button>
              </div>

              <label className="label">
                <p className="label-text-alt">
                  already have an account?
                  <Link to="/logIn" className="link link-hover">
                    LogIn
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
export default SignUp;
