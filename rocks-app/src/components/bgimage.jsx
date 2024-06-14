import React from 'react';
import star from "../assets/images/Star.png"
const BackgroundImageComponent = ({ img }) => {
  const backgroundStyle = {
    width: "100%",
    height: "100vh", // Adjust the height as needed
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative", // Ensure child elements can be positioned
    color: "white", // Text color
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    padding: "20px",
    
  };


  
    const headerStyle = {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 800, // Extra bold
      fontStyle: 'italic',
      fontSize:'60px',
      textAlign: 'center',
      width:'700px',
      position:'relative',
      bottom:'70px'
    };

  return (
    <div style={backgroundStyle}>
        <img src={star} style={{width:'43px',position:'relative',top:'100px',left:'300px'}} />
        <img src={star} style={{width:'20px',position:'relative',top:'300px',left:'-300px'}} />
        <img src={star} style={{width:'30px',position:'relative',top:'350px',left:'-350px'}} />
      <div style={overlayStyle}>
        
      <h1  style={ headerStyle}>
      <span style={{ color: 'white' }}>Rocks</span>{' '}
      <span style={{ color: '#B9FD50' }}>Features Extraction</span>{' '}
      <span style={{ color: 'white' }}>And Types Predection</span>
    </h1>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
