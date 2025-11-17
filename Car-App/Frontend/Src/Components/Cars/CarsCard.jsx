import React from "react";
import { useNavigate } from 'react-router-dom';

const CarsCard = ({ img, name, price, quality, speed, yearReleased }) => {
  const navigate = useNavigate();

  return (
    <div className="border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer">
      <img src={img} alt="car" />
      <h1 className="font-bold text-xl pl-5 text-primary">{name}</h1>
      <p className="pl-5 pb-4">{quality}</p>
      <p className="pl-5 pb-4">{speed} km/h</p>
      <p className="pl-5 pb-4">{yearReleased}</p>
      <div className="flex justify-between px-6 pb-2">
        <h3 className="font-semibold text-xl">${price}</h3>
        <button className="bg-secondary text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-primary transition duration-200 ease-linear"   onClick={() => navigate('/carDetail')}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarsCard;
