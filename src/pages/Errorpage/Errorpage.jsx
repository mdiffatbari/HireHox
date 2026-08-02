import Lottie from "lottie-react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import errorImage from "../../assets/error.json";

const Errorpage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        {/* Animation */}
        <div className="w-72 md:w-96 mx-auto">
          <Lottie.default animationData={errorImage} loop />
        </div>

        {/* Description */}
        <p className="mt-4 text-slate-600 leading-relaxed">
          The page you're looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Errorpage;