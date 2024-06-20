// src/components/CustomContainer.jsx
import React from 'react';
import './Container.css'; // Import the CSS file for styling

const CustomContainer = ({ title, children ,width,height }) => {
  console.log("this is width ",width)
  return (
    <div className="custom-container" style={{maxWidth : width , height:height}}>
      <h2 className="custom-container-title">{title}</h2>
      <div className="custom-container-content">
        {children}
        
      </div>
    </div>
  );
};

export default CustomContainer;