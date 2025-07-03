import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const bookedSlots = ["10:00", "10:05", "10:10"];

const generateNextSlots = (afterTime, interval = 5, count = 20) => {
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

const XeroxBooking = () => {
  const [name, setName] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(0);
  const [copies, setCopies] = useState("");
  const [isBackToBack, setIsBackToBack] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const last = bookedSlots[bookedSlots.length - 1];
    const slots = generateNextSlots(last);
    setAvailableSlots(slots);
  }, []);

  const calculateCost = (pageCount, back, copyCount) => {
    const rate = back ? 2:3;
    return pageCount * rate * copyCount;
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      const pageCount = pdf.numPages;
      setPages(pageCount);
      setTotalCost(calculateCost(pageCount, isBackToBack, copies));
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleCheckbox = (e) => {
    const back = e.target.checked;
    setIsBackToBack(back);
    setTotalCost(calculateCost(pages, back, copies));
  };

  const handleCopiesChange = (e) => {
    const copyCount = parseInt(e.target.value) || 1;
    setCopies(copyCount);
    setTotalCost(calculateCost(pages, isBackToBack, copyCount));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || pages === 0) {
      alert("Please upload a PDF first.");
      return;
    }
    alert(`Booking confirmed for ${name} at ${timeSlot}. Total cost: ₹${totalCost}`);
    // Backend call can be added here
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">📄 Xerox Booking & Payment</h2>

      {/* Booked Slots Display */}
      <div className="mb-4">
        <p className="font-medium text-gray-700">🔒 Booked Slots:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {bookedSlots.map((slot, i) => (
            <span key={i} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
              {slot}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Slot Selection */}
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">-- Select Available Slot --</option>
          {availableSlots.map((slot, i) => (
            <option key={i} value={slot}>{slot}</option>
          ))}
        </select>

        {/* PDF Upload */}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Back to Back Option */}
        <label className="block">
          <input
            type="checkbox"
            checked={isBackToBack}
            onChange={handleCheckbox}
            className="mr-2"
          />
          <span className="text-slate-700">Back to Back Copy (₹3/page)</span>
        </label>

        {/* Number of Copies */}
        <input
          type="number"
          min="1"
          value={copies}
          onChange={handleCopiesChange}
          className="w-full p-2 border rounded"
          placeholder="Number of Copies"
          required
        />

        {/* Cost Display */}
        <div className="bg-gray-50 p-3 rounded shadow-sm text-slate-700">
          <p>Total Pages: <strong>{pages}</strong></p>
          <p>Copies: <strong>{copies}</strong></p>
          <p>Total Cost: <strong className="text-indigo-600 text-lg">₹{totalCost}</strong></p>
        </div>

        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Pay ₹{totalCost} & Submit
        </button>
      </form>
    </div>
  );
};

export default XeroxBooking;
