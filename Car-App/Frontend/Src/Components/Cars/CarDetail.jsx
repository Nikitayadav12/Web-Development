import React, { useState } from 'react';

const CarDetail = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    carModel: '',
    bookingDate: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Car booking request submitted!');
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      carModel: '',
      bookingDate: '',
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          name="carModel"
          placeholder="Car Model"
          value={formData.carModel}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default CarDetail;
