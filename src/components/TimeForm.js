import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TimeSelector = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const times = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8; 
    const period = hour < 12 ? "AM" : "PM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour} ${period} CST`;
  });

  const handleContinue = () => {
    if (selectedTime) {
      navigate("/form", { state: { selectedTime } }); 
    }
  };

  return (
    <div className="max-w-md w-full">
      <h2 className="text-6xl flex flex-wrap font-bold mb-8 whitespace-nowrap justify-center mb-4">
        What Is The Best Time To Reach You?
      </h2>
      <select
        className="w-full p-5 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        <option value="">Choose Your Time</option>
        {times.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-500 mt-2 ml-[160px]">
        (All times are in CST)
      </p>
      <button
        className={`mt-4 w-full py-4 rounded-md ${
          selectedTime
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-500 text-gray-200 cursor-not-allowed"
        }`}
        disabled={!selectedTime}
        onClick={handleContinue}
      >
        CONTINUE &rarr;
      </button>
    </div>
  );
};

export default TimeSelector;
