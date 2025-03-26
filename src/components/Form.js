import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTime = location.state?.selectedTime || "Not Selected";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    // Navigate to the SummaryPage with collected data
    navigate("/summary", {
      state: {
        selectedTime,
        ...formData,
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold mt-12 mb-12 text-center">
          Add Your Personal Details
        </h2>

        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-100 bg-gray-50 rounded-lg text-base placeholder:text-sm placeholder:text-gray-400"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-100 bg-gray-50 rounded-lg text-base placeholder:text-sm placeholder:text-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-100 bg-gray-50 rounded-lg text-base placeholder:text-sm placeholder:text-gray-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-100 bg-gray-50 rounded-lg text-base placeholder:text-sm placeholder:text-gray-400"
        />

        <div className="bg-gray-50 p-3 text-sm text-gray-700 rounded-md">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="text-xs">
              By clicking the button above, you acknowledge, consent and agree
              to the following: a) We take your privacy policy and consent to
              receive notice and other communications electronically; b) We take
              your privacy seriously. You are providing express written consent
              for to share your information with up to four (4) of its and four,
              parties calling on behalf of, or authorized third parties on their
              behalf to contact you (including through automated means e.g.
              autodialing text and pre recorded messaging) about legal services
              or other Mass Tort related offers via telephone, mobile, device
              (including SMS and MMS) and slash or email even if your telephone
              number is currently listed on any state federal local or corporate
              Do Not Call list c) consent to be contacted not required in order
              to purchase goods or services from or the that contact you you may
              choose to speak with an individual service provider by dialing
              (888) 88-888-8888{" "}
            </span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className={`w-[50%] flex flex-wrap justify-center mx-auto mt-12 py-3 text-base rounded-md font-semibold mb-[210px] ${
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phone &&
            formData.consent
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-400 text-white cursor-not-allowed"
          }`}
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone ||
            !formData.consent
          }
        >
          SUBMIT YOUR DETAILS &rarr;
        </button>
      </div>
    </div>
  );
};

export default Form;
