import React from "react";
import img from "../../assets/img/approch.jpg";

const Approch = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Approch</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className=" text-sm lg:text-base">
        Get real-time updates on car availability, special offers, and new model launches
        </p>
        <p className=" text-sm lg:text-base">
        Easily compare multiple car models side by side, analyzing key features like speed, fuel efficiency, safety ratings, and price. This comparison tool helps users make informed decisions before purchasing their dream car.
        </p>
      </div>

      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Approch;
