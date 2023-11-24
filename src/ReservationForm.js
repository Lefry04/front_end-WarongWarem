// ReservationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '/Users/lefry04/warong_warem_react/src/reportWebVitals.js';
import './ReservationForm.css';


const ReservationForm = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    date: '',
    time: '',
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Ganti URL dengan URL lengkap ke endpoint API Laravel
      await axios.post('http://localhost:8000/api/reservations', formData);
      // Mungkin tambahkan logika untuk memberi tahu pengguna bahwa reservasi berhasil
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleFormChange}
          />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
