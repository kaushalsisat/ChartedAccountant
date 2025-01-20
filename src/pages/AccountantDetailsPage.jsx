import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

  const AccountantDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const accountant = location.state?.accountant;

  if (!accountant) {
    return <div className="text-center p-6 text-red-500">Accountant not found</div>;
  }
  //It Is detail Page All Information About Of Charted Accountant-----
  return (
    <div className="p-6 min-h-screen bg-gradient-to-t from-cyan-700 to-blue-900 mb-1">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        {/* --------------back button------------- */}
        <button
          onClick={() => navigate("/")}
          className="text-white bg-blue-500 px-4 py-2 rounded-md mb-4"
        >
          Back to Home
        </button>

          <img
            src={accountant.image}
            alt={accountant.name}
            className="w-44 h-44 object-cover rounded-full mx-auto border-4 border-gray-200"
          />
          <h2 className="text-3xl font-semibold mt-4 text-center text-gray-900">
            {accountant.name}
          </h2>
          <p className="text-sm text-center text-gray-600 mt-2">{accountant.intro}</p>
          <p className="text-sm text-center text-gray-600 mt-2">{accountant.description}</p>

         <div className="mt-6">
           <h3 className="text-xl font-semibold text-gray-800">Services:</h3>
           <ul className="list-disc pl-6 text-gray-700">
            {accountant.services?.map((service, index) => (
            <li key={index}>{service}</li>
            ))}
          </ul>

          <div className="mt-4 space-y-2">
            <p><strong className="font-semibold">Rating:</strong> {accountant.rating}</p>
            <p><strong className="font-semibold">ReviewCount:</strong> {accountant.reviewCount}</p>
            <p><strong className="font-semibold">Price:</strong> {accountant.price}</p>
            <p><strong className="font-semibold">Delivery Time:</strong> {accountant.deliveryTime}</p>
            <p><strong className="font-semibold">Partner Since:</strong> {accountant.partnerSince}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountantDetailsPage;
