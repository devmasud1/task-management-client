import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div
        className="hero h-[100vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/3449L44/bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-95"></div>
        <div
          className="lg:w-3/4 w-full text-center "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="w-full space-y-2">
            <h1 className="text-sky-200 lg:text-7xl md:text-5xl text-3xl font-bold">
              Welcome To <br /> Task Management Platform
            </h1>
            <p className="text-sky-300 lg:text-5xl md:text-4xl text-xl font-semibold pt-1 pb-5">
              Enhance and Improve Your Experience
            </p>
            <Link to="/dashboard" className="pt-3">
              <AwesomeButton
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                size="small"
                type="primary"
              >
                Let’s Explore
              </AwesomeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
