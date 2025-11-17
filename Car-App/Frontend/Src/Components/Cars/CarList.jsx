// In React Component
import { useEffect, useState } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars')
      .then(res => setCars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      {cars.map(car => (
        <div key={car._id}>
          <h3>{car.name}</h3>
          <p>Price: ${car.price}</p>
          <p>Quality: {car.quality}</p>
          <p>Speed: {car.speed} km/h</p>
          <p>Year Released: {car.yearReleased}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;
