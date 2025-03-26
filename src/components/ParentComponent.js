import React, { useState } from "react";
import Form from "./Form";
import DisplaySubmittedData from "./SummaryPage";

const ParentComponent = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {!submittedData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <DisplaySubmittedData
          submittedData={submittedData}
          onPrint={handlePrint}
        />
      )}
    </div>
  );
};

export default ParentComponent;
