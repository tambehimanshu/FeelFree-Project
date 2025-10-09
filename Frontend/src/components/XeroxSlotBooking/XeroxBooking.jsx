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
  const [copies, setCopies] = useState(1);
  const [isBackToBack, setIsBackToBack] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const last = bookedSlots[bookedSlots.length - 1];
    const slots = generateNextSlots(last);
    setAvailableSlots(slots);
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
  };

  return (
    <div className="text-center mt-10">
      {/* Button to open modal */}
      <button
        className="btn bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => document.getElementById("xerox_modal").showModal()}
      >
        📄 Book Xerox Slot
      </button>

      {/* Modal */}
      <dialog id="xerox_modal" className="modal">
        <div className="modal-box max-w-2xl">
          {/* Close button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h2 className="text-2xl font-bold mb-6 text-indigo-700">
            Xerox Booking & Payment
          </h2>

          {/* Form inside modal */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />

            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">-- Select Available Slot --</option>
              {availableSlots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              required
            />

            <label className="block">
              <input
                type="checkbox"
                checked={isBackToBack}
                onChange={handleCheckbox}
                className="mr-2"
              />
              Back to Back Copy (₹3/page)
            </label>

            <input
              type="number"
              min="1"
              value={copies}
              onChange={handleCopiesChange}
              className="w-full p-2 border rounded"
              placeholder="Number of Copies"
              required
            />

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
              className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
            >
              Pay ₹{totalCost} & Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default XeroxBooking;
