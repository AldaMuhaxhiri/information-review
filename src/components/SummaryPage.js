import React from "react";
import { useLocation } from "react-router-dom";
import { PrinterIcon } from "@heroicons/react/solid";

const SummaryPage = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <p className="text-center mt-10 text-red-500">No data available.</p>;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex justify-center pt-1 print:pt-0">
      <div
        className="w-full max-w-3xl p-12 print:p-16 bg-white print:bg-transparent"
        id="printable-content"
      >
        <div className="text-center mb-12 print:mb-8">
          <h2 className="text-4xl font-bold print:text-3xl">
            Personal Information Review
          </h2>
          <p className="text-lg text-gray-600 print:text-base">
            Please review your details before submission.
          </p>
        </div>

        <div className="text-lg space-y-8 print:space-y-6">
          <div className="flex justify-between border-b pb-2 print:pb-1">
            <span className="font-semibold">Chosen Time:</span>
            <span>{data.selectedTime}</span>
          </div>
          <div className="flex justify-between border-b pb-2 print:pb-1">
            <span className="font-semibold">First Name:</span>
            <span>{data.firstName}</span>
          </div>
          <div className="flex justify-between border-b pb-2 print:pb-1">
            <span className="font-semibold">Last Name:</span>
            <span>{data.lastName}</span>
          </div>
          <div className="flex justify-between border-b pb-2 print:pb-1">
            <span className="font-semibold">Email:</span>
            <span>{data.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2 print:pb-1">
            <span className="font-semibold">Phone:</span>
            <span>{data.phone}</span>
          </div>
        </div>

        <div className="mt-12 flex justify-center print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            <PrinterIcon className="w-5 h-5 mr-2" />
            Print Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
