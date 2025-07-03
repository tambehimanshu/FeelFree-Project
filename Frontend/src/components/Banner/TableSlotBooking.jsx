import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function TableSlotBooking() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [mealType, setMealType] = useState("small");
  const [timeSlot, setTimeSlot] = useState(10);

  const getExtraCharge = () => {
    return mealType === "small" ? 10 : 40;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${name}.\nSeats: ${seats}\nTime slot: ${timeSlot} mins\nMeal: ${mealType}\nTotal Charge: ₹${getExtraCharge()}`
    );
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          🍽️ Table Reservation Form
        </h2>
        import { motion } from "framer-motion";

<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-sm text-red-600 mt-2"
>
  ⚠️ Be on time. Table held for 10 mins only, then given to others.
</motion.p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="seats">Number of Seats</Label>
            <Input
              type="number"
              id="seats"
              min={1}
              max={20}
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              required
            />
          </div>

          <div>
            <Label htmlFor="timeSlot">Time Slot (in mins)</Label>
            <select
              id="timeSlot"
              className="w-full border rounded-md p-2"
              value={timeSlot}
              onChange={(e) => setTimeSlot(Number(e.target.value))}
            >
              {[...Array(9)].map((_, i) => {
                const mins = (i + 1) * 10;
                return (
                  <option key={mins} value={mins}>
                    {mins} minutes
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <Label>Meal Type</Label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="small"
                  checked={mealType === "small"}
                  onChange={() => setMealType("small")}
                />
               <span className="text-slate-900"> Small Meal (+₹10)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="dinner"
                  checked={mealType === "dinner"}
                  onChange={() => setMealType("dinner")}
                />
                 <span className="text-slate-900"> Dinner+₹40</span>
              </label>
            </div>
          </div>

          <div className="text-lg text-gray-600 mt-4">
            Total Extra Charges: ₹<strong>{getExtraCharge()}</strong>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-2 mt-4"
          >
            Confirm Reservation
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}
