import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// ✅ Use CDN path for worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const Payment = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(0);
  const [isBackToBack, setIsBackToBack] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      const pageCount = pdf.numPages;
      setPages(pageCount);

      const cost = isBackToBack ? pageCount * 3 : pageCount * 2;
      setTotalCost(cost);
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleCheckbox = (e) => {
    const back = e.target.checked;
    setIsBackToBack(back);
    const cost = pages * (back ? 3 : 2);
    setTotalCost(cost);
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Xerox Payment</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-4" />
      <label className="block mb-4">
        <input type="checkbox" onChange={handleCheckbox} className="text-slate-950" /> Back to Back Copy
      </label>
      <p>Total Pages: {pages}</p>
      <p className="text-lg font-semibold mb-4">Total Cost: ₹{totalCost}</p>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Pay ₹{totalCost}</button>
    </div>
  );
};

export default Payment;
