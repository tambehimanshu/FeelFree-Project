import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TableBooking() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(1);
  const [slot, setSlot] = useState("");
  const navigate = useNavigate();

  // Flat charge for family booking
  const charges = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { name, people, slot, charges };

    // Navigate to payment page with booking details
    navigate("/payment", { state: { bookingData } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Hotel Table Booking
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-gray-700">Number of People</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              min="1"
              required
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Slot Time */}
          <div>
            <label className="block text-gray-700">Slot Time</label>
            <input
              type="time"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Charges */}
          <div className="text-lg font-medium text-gray-800">
            Charges: ₹{charges}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
