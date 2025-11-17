import React from "react";

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
      We offer a seamless car buying and selling experience with a wide selection of high-quality vehicles. At AueLuxe, we offer flexible financing options, a seamless booking process, and a commitment to customer satisfaction—ensuring you drive away in your dream car with ease and confidence."
      </p>
    </div>
  );
};

export default WhyUsCard;
