// App.jsx

import React from 'react';
import './App.css';
import Header from './components/Header'; // Adjust the path based on your project structure
import BackgroundImageComponent from './components/bgimage';
import CustomContainer from './components/Container'; // Assuming you already have this component imported

import img from './assets/images/testbg.png';

function App() {
  return (
    <div className='bgApp'>
      <Header />

      <BackgroundImageComponent img={img} />
      {/* <img src={img} alt="" style={{ width: "100%"}} /> */}
      {/* <Ellipse/> */}

      {/* Integrate the CustomContainer component here */}
      <CustomContainer title="My Custom Container">
        <p>This is the content inside the custom container.</p>
      </CustomContainer>

      <h1 style={{ height: '500px', marginTop: '500px' }}> </h1>
    </div>
  );
}

export default App;
