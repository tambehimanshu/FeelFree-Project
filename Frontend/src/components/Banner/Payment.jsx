import React, { useState } from "react";
import { FaGooglePay, FaPhone, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

const PaymentForm = ({ amount = 500, onConfirm }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!paymentMethod) {
    alert("⚠️ Please select a payment method");
    return;
  }

  const upiId = "merchant@upi"; // Replace with your UPI ID
  const transactionNote = "Slot Booking Payment";
  const upiLink = `upi://pay?pa=${upiId}&pn=SmartBooking&am=${amount}&cu=INR&tn=${transactionNote}`;

  if (paymentMethod === "Google Pay" || paymentMethod === "PhonePe" || paymentMethod === "Paytm") {
    // Open the UPI intent link
    window.location.href = upiLink;
  } else {
    alert(`✅ Payment of ₹${amount} confirmed via ${paymentMethod}`);
    if (onConfirm) onConfirm(paymentMethod, amount);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          💳 Payment Checkout
        </h2>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
          <p className="text-gray-600">Total Payable Amount</p>
          <p className="text-2xl font-bold text-indigo-700">₹{amount}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="font-medium text-gray-700">Select Payment Method:</p>

          {/* UPI Options */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 border p-3 rounded-md hover:border-indigo-500 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Google Pay"
                checked={paymentMethod === "Google Pay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-indigo-600"
              />
              <FaGooglePay className="text-blue-600 text-2xl" />
              <span className="text-gray-800 font-medium">Google Pay</span>
            </label>

            <label className="flex items-center gap-3 border p-3 rounded-md hover:border-indigo-500 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="PhonePe"
                checked={paymentMethod === "PhonePe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-indigo-600"
              />
              <FaPhone className="text-purple-600 text-2xl" />
              <span className="text-gray-800 font-medium">PhonePe</span>
            </label>

            <label className="flex items-center gap-3 border p-3 rounded-md hover:border-indigo-500 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Paytm"
                checked={paymentMethod === "Paytm"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-indigo-600"
              />
              <SiPaytm className="text-sky-600 text-2xl" />
              <span className="text-gray-800 font-medium">Paytm</span>
            </label>
          </div>

          {/* Card Payment */}
          <label className="flex items-center gap-3 border p-3 rounded-md hover:border-indigo-500 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Credit/Debit Card"
              checked={paymentMethod === "Credit/Debit Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-indigo-600"
            />
            <FaCreditCard className="text-green-600 text-2xl" />
            <span className="text-gray-800 font-medium">Credit / Debit Card</span>
          </label>

          {/* Cash on Delivery */}
          <label className="flex items-center gap-3 border p-3 rounded-md hover:border-indigo-500 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={paymentMethod === "Cash on Delivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-indigo-600"
            />
            <FaMoneyBillWave className="text-yellow-600 text-2xl" />
            <span className="text-gray-800 font-medium">Cash on Delivery</span>
          </label>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all mt-4"
          >
            Pay ₹{amount} Securely
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
