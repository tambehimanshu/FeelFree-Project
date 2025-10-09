import React, { useState, useEffect } from "react";

// Simulated booked time slots
const bookedFuelSlots = ["09:00", "09:10", "09:20"];

// Function to generate slots after last booked time
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
      alert("⚠️ Please complete all fields.");
      return;
    }

    alert(
      `✅ Booking Confirmed!\n\n🚗 Vehicle: ${vehicleNumber}\n⛽ Fuel Type: ${fuelType}\n🕒 Time Slot: ${selectedSlot}`
    );
    // TODO: Backend integration for saving booking
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
          ⛽ Fuel Slot Booking
        </h2>

        {/* Important Notice */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded mb-6 animate-pulse">
          🚦 Kindly avoid crowding near the fuel station. Please arrive only{" "}
          <span className="font-semibold">10 minutes</span> before your slot to
          ensure smooth traffic and service. Thank you! ⛽
        </div>

        {/* Booked Slots */}
        <div className="mb-4">
          <p className="font-medium text-gray-700 mb-1">🔒 Booked Slots:</p>
          <div className="flex flex-wrap gap-2">
            {bookedFuelSlots.map((slot, i) => (
              <span
                key={i}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Number */}
          <input
            type="text"
            placeholder="Vehicle Number (e.g. MH12AB1234)"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
            required
          />

          {/* Fuel Type */}
          <div>
            <p className="text-slate-800 font-medium mb-2">Select Fuel Type:</p>
            <div className="flex gap-4">
              {["CNG", "Petrol", "Diesel"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fuel"
                    value={type}
                    checked={fuelType === type}
                    onChange={(e) => setFuelType(e.target.value)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-slate-900">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Slot Picker */}
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
            required
          >
            <option value="">-- Select Available Slot --</option>
            {availableSlots.map((slot, i) => (
              <option key={i} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-all"
          >
            Confirm Slot
          </button>
        </form>
      </div>
    </div>
  );
};

export default FuelSlotBooking;
