import React from "react";

const ServiceCards = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
      Get expert car recommendations based on your budget, preferences, and driving needs. Our AI-powered suggestion system helps you find the best-suited vehicle, making your car-buying journey simple and stress-free
      </p>
    </div>
  );
};

export default ServiceCards;
