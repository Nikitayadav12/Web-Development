import React, { useEffect, useState } from "react";
import CarsCard from "./CarsCard";

const OurCars = () => {
  const [carsData, setCarsData] = useState([]);

  // Fetch cars from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => setCarsData(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  console.log("🚗 carsData:", carsData);

  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Cars</span>
        </h1>
      </div>

      {carsData.length === 0 ? (
        <p className="text-center mt-5 text-gray-500">No cars available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {carsData.map((item) => (
            <div key={item._id}>
              <CarsCard
                img={"/src/assets/img/car6.png"}
                name={item.name}
                price={item.price}
                speed={item.speed}
                quality={item.quality}
                yearReleased={item.yearReleased}
              />
            </div>
          ))} 
        </div>
      )}


    </div>
  );
};

export default OurCars;
