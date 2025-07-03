// Xerox Slot Booking Component
import React, { useState } from "react";

export const XeroxSlotBooking = () => {
  const [form, setForm] = useState({
    name: "",
    slot: "",
    copies: 1,
    backToBack: false,
    purpose: "",
    paymentDone: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Xerox Form Submitted", form);
    // send to backend or show QR code
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Xerox Slot Booking</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="block mb-2" />
      <input name="slot" type="time" onChange={handleChange} className="block mb-2" />
      <input name="copies" type="number" min="1" onChange={handleChange} className="block mb-2" />
      <label>
        <input name="backToBack" type="checkbox" onChange={handleChange} /> Back to back printing
      </label>
      <input name="purpose" placeholder="Purpose" onChange={handleChange} className="block mb-2" />
      <button className="bg-blue-500 px-3 py-1 text-white rounded">Pay & Book</button>
    </form>
  );
};

// Darshan Slot Booking Component
export const DarshanSlotBooking = () => {
  const [form, setForm] = useState({
    familyName: "",
    leaderName: "",
    males: 0,
    females: 0,
    slot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Darshan Form Submitted", form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Darshan Slot Booking</h2>
      <input name="leaderName" placeholder="Leader's Name" onChange={handleChange} className="block mb-2" />
      <input name="familyName" placeholder="Family Name" onChange={handleChange} className="block mb-2" />
      <input name="males" type="number" placeholder="No. of Males" onChange={handleChange} className="block mb-2" />
      <input name="females" type="number" placeholder="No. of Females" onChange={handleChange} className="block mb-2" />
      <input name="slot" type="time" onChange={handleChange} className="block mb-2" />
      <p className="text-sm text-gray-500">Note: Each family has 2 minutes for Darshan.</p>
      <button className="bg-green-500 px-3 py-1 text-white rounded">Book Slot</button>
    </form>
  );
};

// Table Booking for Restaurant Component
export const TableBooking = () => {
  const [form, setForm] = useState({
    name: "",
    people: 1,
    meal: "Lunch",
    duration: "30",
    slot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Table Booking Submitted", form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Table Slot Booking</h2>
      <input name="name" placeholder="Your Name" onChange={handleChange} className="block mb-2" />
      <input name="people" type="number" min="1" placeholder="No. of People" onChange={handleChange} className="block mb-2" />
      <select name="meal" onChange={handleChange} className="block mb-2">
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <select name="duration" onChange={handleChange} className="block mb-2">
        <option value="30">30 Minutes</option>
        <option value="45">45 Minutes</option>
        <option value="60">1 Hour</option>
      </select>
      <input name="slot" type="time" onChange={handleChange} className="block mb-2" />
      <button className="bg-purple-500 px-3 py-1 text-white rounded">Book Table</button>
    </form>
  );
};
