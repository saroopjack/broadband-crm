import React from "react";

const DashBoardCard = ({ name, activeCount }) => {
  return (
    <div className="py-12 text-center mx-auto bg-slate-100 rounded-3xl shadow-lg max-w-sm">
      <h1 className="py-3 text-2xl font-semibold text-gray-700">{name}</h1>
      <div className="text-7xl">{activeCount}</div>
    </div>
  );
};

export default DashBoardCard;
