import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r from-purple-200 to-pink-200 bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-2xl text-black font-bold leading-tight">
          Welcome to MediCare+ Clinic
        </h1>

        <h1 className="text-5xl  text-blue-900 font-bold leading-tight">
          Best Specialists
        </h1>
        <p className="text-green-800">
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer treatments and supportive care services in a
          single convenient location.
        </p>
        <Button title="Make an Appointment" />
      </div>
    </div>
  );
};

export default Home;
