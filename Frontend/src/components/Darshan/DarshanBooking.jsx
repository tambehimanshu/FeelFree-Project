import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Dummy slots (already booked)
const bookedSlots = ["10:00", "10:30", "11:00"];

// Slot generator
const generateNextSlots = (afterTime, interval = 30, count = 8) => {
  const [hour, minute] = afterTime.split(":").map(Number);
  const start = new Date();
  start.setHours(hour);
  start.setMinutes(minute);

  const slots = [];
  for (let i = 0; i < count; i++) {
    const h = start.getHours().toString().padStart(2, "0");
    const m = start.getMinutes().toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
    start.setMinutes(start.getMinutes() + interval);
  }
  return slots;
};

const DarshanBooking = () => {
  const [name, setName] = useState("");
  const [members, setMembers] = useState(1);
  const [arrivalTime, setArrivalTime] = useState("");
  const [selectedTemple, setSelectedTemple] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const lastSlot = bookedSlots[bookedSlots.length - 1];
    setAvailableSlots(generateNextSlots(lastSlot));
  }, []);

  // Darshan fee (example: ₹50 per member)
  const totalCost = members * 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTemple || !selectedSlot) {
      alert("Please complete all fields.");
      return;
    }
    setSubmitted(true);
  };

  const handlePayment = () => {
    navigate("/payment", { state: { amount: totalCost } });
  };

  const temples = [
    { name: "Shirdi Sai Baba Temple", location: "Shirdi" },
    { name: "Siddhivinayak Temple", location: "Mumbai" },
    { name: "Vithoba Temple", location: "Pandharpur" },
    { name: "Trimbakeshwar Temple", location: "Nashik" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
          Darshan Slot Booking
        </h2>

        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-500 mb-4">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600 mb-2">Temple: {selectedTemple}</p>
            <p className="text-gray-600 mb-2">Name: {name}</p>
            <p className="text-gray-600 mb-2">Members: {members}</p>
            <p className="text-gray-600 mb-2">Arrival Time: {arrivalTime}</p>
            <p className="text-gray-600 mb-2">Slot: {selectedSlot}</p>
            <p className="text-indigo-600 text-lg font-semibold">
              Total Cost: ₹{totalCost}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Temple Dropdown */}
            <div>
              <label className="block text-gray-700 mb-1">Select Temple</label>
              <select
                value={selectedTemple}
                onChange={(e) => setSelectedTemple(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">-- Choose a Temple --</option>
                {temples.map((t, idx) => (
                  <option key={idx} value={t.name}>
                    {t.name} ({t.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Members */}
            <div>
              <label className="block text-gray-700 mb-1">Number of Members</label>
              <input
                type="number"
                min="1"
                value={members}
                onChange={(e) => setMembers(parseInt(e.target.value))}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Arrival Time */}
          

            {/* Slots */}
            <div>
              <label className="block text-gray-700 mb-1">Select Slot</label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">-- Select a Slot --</option>
                {availableSlots.map((slot, idx) => (
                  <option key={idx} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Cost */}
            <div className="bg-gray-50 p-3 rounded shadow-sm text-slate-700">
              <p>Members: <strong>{members}</strong></p>
              <p>
                Total Cost:{" "}
                <strong className="text-indigo-600 text-lg">₹{totalCost}</strong>
              </p>
            </div>

            {/* Pay & Submit */}
            <button
              type="submit"
              onClick={handlePayment}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
            >
              Pay ₹{totalCost}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default DarshanBooking;
