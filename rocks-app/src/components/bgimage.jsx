import React from 'react';
import star from "../assets/images/Star.png"
import rect from "../assets/images/Rect4.png"
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
    const imageStyles = {
      width: '50px',
    };
    
    const textStyles = {
      margin: '0 10px', // Adjust spacing between the text and images
    };

    const containerStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Center items horizontally
      position:'relative',
      top:'70px'
    };

    const textStyles2= {
      fontFamily: 'Outfit, sans-serif',
      fontWeight: 'bold', // Make the text bold
      textTransform: 'uppercase', // Convert text to uppercase
      paddingLeft: '20px', // Padding on the left
      paddingRight: '20px',
      letterSpacing: '1.5px', // Adjust letter spacing
    opacity: 0.8,
    }

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
     <div style={containerStyles}>
      <img src={rect} alt="rect" style={imageStyles} />
      <span style={textStyles2}>geological features extraction from rock cores</span>
            <img src={rect} alt="rect" style={imageStyles} />
    </div>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
