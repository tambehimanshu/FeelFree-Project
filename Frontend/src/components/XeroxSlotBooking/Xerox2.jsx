import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import Payment from "../Banner/Payment";
import { useNavigate } from "react-router-dom";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const bookedSlots = ["10:00", "10:05", "10:10"];

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

const handlePayment =()=>{
  navigate("/payment",{state:{amount:totalCost}});
}
const XeroxBooking = () => {
  const [name, setName] = useState("");
  const [pages, setPages] = useState(0);
  const [copies, setCopies] = useState(1);
  const [isBackToBack, setIsBackToBack] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [file, setFile] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const lastSlot = bookedSlots[bookedSlots.length - 1];
    setAvailableSlots(generateNextSlots(lastSlot));
  }, []);

  const calculateCost = (pageCount, back, copyCount) => {
    const rate = back ? 3 : 2;
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

  const handleBackToBackChange = (e) => {
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
    if (!file || pages === 0 || !selectedSlot) {
      alert("Please complete all fields and upload a PDF.");
      return;
    }
    setSubmitted(true);
  };
const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
          Xerox Slot Booking
        </h2>

        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-500 mb-4">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600 mb-2">Name: {name}</p>
            <p className="text-gray-600 mb-2">Pages: {pages}</p>
            <p className="text-gray-600 mb-2">
              Type: {isBackToBack ? "Back-to-Back" : "Single-Sided"}
            </p>
            <p className="text-gray-600 mb-2">Copies: {copies}</p>
            <p className="text-gray-600 mb-2">Slot: {selectedSlot}</p>
            <p className="text-indigo-600 text-lg font-semibold">
              Total Cost: ₹{totalCost}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={isBackToBack}
                onChange={handleBackToBackChange}
                id="backToBack"
                className="h-4 w-4"
              />
              <label htmlFor="backToBack" className="text-gray-700">
                Back-to-Back Copy (₹3/page)
              </label>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Number of Copies</label>
              <input
                type="number"
                min="1"
                value={copies}
                onChange={handleCopiesChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

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

            <div className="bg-gray-50 p-3 rounded shadow-sm text-slate-700">
              <p>Total Pages: <strong>{pages}</strong></p>
              <p>Copies: <strong>{copies}</strong></p>
              <p>
                Total Cost:{" "}
                <strong className="text-indigo-600 text-lg">₹{totalCost}</strong>
              </p>
            </div>

            <button
              type="submit"
              onClick={handlePayment}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all"
            >
              Pay  ₹{totalCost}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default XeroxBooking;
// gpay ppay added remaing 