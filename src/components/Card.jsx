import React from "react";

const Card = ({ accountant, onCardClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-10 mt-4">
      {/* ------Full Card Details----- */}
      <img
        src={accountant.image}
        alt={accountant.name}
        className="w-full h-52 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-2">{accountant.name}</h3>
      <p className="text-sm text-gray-600">{accountant.intro}</p>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
        onClick={() => onCardClick(accountant.id)}
      >
        See More
      </button>
    </div>
  );
};

export default Card;
