import React from "react";

const TotalCard = ({
  logo,
  number,
  total,
}: {
  logo: string;
  number: string;
  total: string;
}) => {
  return (
    <div className="flex p-4 bg-white rounded-xl shadow-lg items-center">
      <img src={logo} />
      <div>
        <h2 className="text-2xl font-semibold">{number}</h2>
        <p className="text-[#121218]/60">Total {total}</p>
      </div>
    </div>
  );
};

export default TotalCard;
