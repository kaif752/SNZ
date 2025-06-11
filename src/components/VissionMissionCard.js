// src/components/VisionMissionCard.jsx
import React from 'react';

const VisionMissionCard = ({ number, title, description }) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-[#155A8A] text-white font-bold px-4 py-2 rounded-md cursor-pointer">
        {number}
      </div>
      <div>
        <h4 className="text-[#155A8A] font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VisionMissionCard;
