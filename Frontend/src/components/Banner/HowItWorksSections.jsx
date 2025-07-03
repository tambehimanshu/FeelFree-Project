import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "1. Choose Service",
    description:
      "Select the service you want – Xerox, Temple Darshan, Parking, CNG/Petrol refill, or Table Booking.",
  },
  {
    title: "2. Select Time Slot",
    description:
      "Pick a convenient time slot for your appointment or service. Avoid waiting in queues.",
  },
  {
    title: "3. Upload & Pay",
    description:
      "Upload required documents (if any) and complete payment securely online.",
  },
  {
    title: "4. Get Confirmation",
    description:
      "You’ll receive a confirmation and live status updates or a notification when it’s ready.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="how-it-works">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">How It Works</h2>
        <p className="text-gray-600 mb-12">
          Our slot booking system makes everyday errands fast, organized, and stress-free.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg text-black font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
