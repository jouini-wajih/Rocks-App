// GenerateButton.jsx

import React, { useState } from 'react';
import './button.css';

const GenerateButton = ({ onGenerateClick }) => {
  const handleGenerate = () => {
    // Implement your logic to generate visualizations here
    // Example: Assuming onGenerateClick is a callback function passed from the parent component
    if (typeof onGenerateClick === 'function') {
      onGenerateClick();
    }
  };

  return (
    <button className="generate-button" onClick={handleGenerate}>
      Generate
    </button>
  );
};

export default GenerateButton;
