import React, { useEffect, useState } from "react";
import axios from "axios";
const AllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("❌ Error fetching cars:", error);
      });
  }, []);

  return (
    <div>
      <h2>🚗 All Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <strong>{car.name}</strong> - ₹{car.price} - {car.quality} - {car.speed} km/h - {car.yearReleased}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCars;
