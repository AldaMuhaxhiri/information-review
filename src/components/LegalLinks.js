import React from "react";

const LegalLinks = () => {
  return (
    <div className="w-full text-center text-sm text-gray-900 font-medium">
      <a href="#" role="link" className="text-gray-700 hover:underline mx-2" onClick={(e) => e.preventDefault()}>
        Terms and Conditions
      </a>
      <span className="text-black">|</span>
      <a href="#" role="link" className="text-gray-700 hover:underline mx-2" onClick={(e) => e.preventDefault()}>
        Privacy Policy
      </a>
      <span className="text-black">|</span>
      <a href="#" role="link" className="text-gray-700 hover:underline mx-2" onClick={(e) => e.preventDefault()}>
        California Privacy
      </a>
    </div>
  );
};

export default LegalLinks;
