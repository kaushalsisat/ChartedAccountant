import React from "react";
import Card from "./Card";

const CardList = ({ accountants, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {accountants.map((accountant) => (
        <Card
          key={accountant.id}
          accountant={accountant}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default CardList;
