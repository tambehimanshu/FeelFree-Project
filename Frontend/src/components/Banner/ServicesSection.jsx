import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ClipboardDocumentCheckIcon,
  TruckIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">Our Smart Services</h2>
        <p className="text-gray-600 mb-12">
          Book services in advance, save time, avoid crowds, and go digital with your daily needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">

          {/* Xerox Booking */}
          <div
            onClick={() => navigate('/xerox-booking')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
          >
            <ClipboardDocumentCheckIcon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Xerox & Document Upload</h3>
            <p className="text-gray-600">
              Upload documents, pay online, and get notified when your copies are ready.
            </p>
          </div>

          {/* Temple Darshan Booking */}
          <div
            onClick={() => navigate('/darshanbooking')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
          >
            <BuildingStorefrontIcon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Temple Darshan Slot Booking</h3>
            <p className="text-gray-600">
              Avoid long queues at temples by booking your darshan slot online.
            </p>
          </div>

          {/* Table Reservation */}
          <div
            onClick={() => navigate('/table-booking')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
          >
            <CalendarDaysIcon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Table Reservation & Food Orders</h3>
            <p className="text-gray-600">
              Reserve tables in advance and pre-order your meals for hassle-free dining.
            </p>
          </div>

          {/* Parking Slot Booking */}
          <div
            onClick={() => navigate('/parking-booking')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
          >
            <TruckIcon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Parking Slot Booking</h3>
            <p className="text-gray-600">
              Book your vehicle parking in busy areas with guaranteed time slots.
            </p>
          </div>

          {/* Fuel Refill Booking */}
          <div
            onClick={() => navigate('/fuelSlot-booking')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
          >
            <BanknotesIcon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">CNG / Petrol Refill Slots</h3>
            <p className="text-gray-600">
              Save fuel and time by booking a refill slot at your preferred station.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
