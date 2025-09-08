import React from "react";
import Navbar1 from "../../Navbar1";

const Profile = () => {
  // Dummy user data (can come from props or API later)
  const user = {
    name: "Himanshu Tambe",
    email: "himanshu@example.com",
    contact: "+91 9876543210",
    dob: "15 March 2003",
    address: "Shegaon, Maharashtra, India",
    image: "https://via.placeholder.com/150", // Replace with actual profile pic
  };

  // Dummy transactions
  const transactions = [
    { id: 1, date: "2025-09-01", service: "Xerox Printing", amount: "₹40", status: "Completed" },
    { id: 2, date: "2025-08-28", service: "Temple Darshan Slot", amount: "₹100", status: "Completed" },
    { id: 3, date: "2025-08-20", service: "Table Reservation", amount: "₹500", status: "Pending" },
  ];

  return (
    <section className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col items-center px-6 py-16 overflow-hidden">
      <Navbar1/>
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Profile Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
        
        {/* User Info */}
        <div className="flex flex-col items-center text-center">
          <img
            src={user.image}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
            {user.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>

        {/* Details Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-xl shadow">
            <p className="font-semibold">📞 Contact</p>
            <p>{user.contact}</p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-xl shadow">
            <p className="font-semibold">🎂 Date of Birth</p>
            <p>{user.dob}</p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-xl shadow sm:col-span-2">
            <p className="font-semibold">🏠 Address</p>
            <p>{user.address}</p>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
            Transaction History
          </h3>
          <ul className="space-y-4">
            {transactions.map((txn) => (
              <li
                key={txn.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-xl shadow"
              >
                <div>
                  <p className="font-semibold">{txn.service}</p>
                  <p className="text-xs text-gray-500">{txn.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{txn.amount}</p>
                  <p
                    className={`text-xs ${
                      txn.status === "Completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {txn.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
