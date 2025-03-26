import React from "react";

const LegalLinks = () => {
  return (
    <div className="w-full text-center text-sm text-gray-900 font-medium">
      <a href="#" className="text-gray-700 hover:underline mx-2">
        Terms and Conditions
      </a>
      <span className="text-black">|</span>
      <a href="#" className="text-gray-700 hover:underline mx-2">
        Privacy Policy
      </a>{" "}
      <span className="text-black">|</span>
      <a href="#" className="text-gray-700 hover:underline mx-2">
        California Privacy
      </a>
    </div>
  );
};

export default LegalLinks;
