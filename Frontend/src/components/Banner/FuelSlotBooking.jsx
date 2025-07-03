import React, { useState, useEffect } from "react";

// Simulated booked time slots
const bookedFuelSlots = ["09:00", "09:10", "09:20"];

const generateFuelSlots = (afterTime = "08:00", interval = 10, count = 20) => {
  const [hour, minute] = afterTime.split(":").map(Number);
  const start = new Date();
  start.setHours(hour);
  start.setMinutes(minute);

  const slots = [];
  for (let i = 1; i <= count; i++) {
    start.setMinutes(start.getMinutes() + interval);
    const h = start.getHours().toString().padStart(2, "0");
    const m = start.getMinutes().toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
  }
  return slots;
};

const FuelSlotBooking = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const lastBooked = bookedFuelSlots[bookedFuelSlots.length - 1] || "08:00";
    const slots = generateFuelSlots(lastBooked, 10, 10);
    setAvailableSlots(slots);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vehicleNumber || !fuelType || !selectedSlot) {
      alert("Please complete all fields.");
      return;
    }

    alert(`🚗 Booking Confirmed\n\nVehicle: ${vehicleNumber}\nFuel Type: ${fuelType}\nTime Slot: ${selectedSlot}`);
    // Backend integration can be added here
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-green-700">⛽ Fuel Slot Booking</h2>
      
       {/* important msg */}
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded mb-4 overflow-hidden relative">
  <div className="animate-marquee whitespace-nowrap">
    🚦 Kindly avoid crowding near the fuel station. Please arrive only 10 minutes before your slot to ensure smooth traffic and service. Thank you! ⛽
  </div>
</div>

      {/* Booked Slots */}
      <div className="mb-4">
        <p className="font-medium text-gray-700">🔒 Booked Slots:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {bookedFuelSlots.map((slot, i) => (
            <span key={i} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
              {slot}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Vehicle Number (e.g. MH12AB1234)"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
          className="w-full p-2 border rounded"
          required
        />

        {/* Fuel Type */}
        <div className="space-y-2">
          <p className="text-slate-800 font-medium">Select Fuel Type:</p>
          <label className="block">
            <input
              type="radio"
              name="fuel"
              value="CNG"
              onChange={(e) => setFuelType(e.target.value)}
              checked={fuelType === "CNG"}
              className="mr-2"
            />
           <span className="text-slate-900">CNG</span>
          </label>
          <label className="block">
            <input
              type="radio"
              name="fuel"
              value="Petrol"
              onChange={(e) => setFuelType(e.target.value)}
              checked={fuelType === "Petrol"}
              className="mr-2"
            />
           <span className="text-slate-900">Petrol</span>
          </label>
          <label className="block ">
            <input
              type="radio"
              name="fuel"
              value="Diesel"
              onChange={(e) => setFuelType(e.target.value)}
              checked={fuelType === "Diesel"}
              className="mr-2"
            />
            <span className="text-slate-900">Diesel</span>
          </label>
        </div>

        {/* Slot Picker */}
        <select
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">-- Select Available Slot --</option>
          {availableSlots.map((slot, i) => (
            <option key={i} value={slot}>{slot}</option>
          ))}
        </select>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Confirm Slot
        </button>
      </form>
    </div>
  );
};

export default FuelSlotBooking;
