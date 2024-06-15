import './App.css'
import img from './assets/images/testbg.png'
import FileInput from './components/FileInput'
// App.jsx

import React from 'react';
import './App.css';
import Header from './components/Header'; // Adjust the path based on your project structure
import BackgroundImageComponent from './components/bgimage';
import CustomContainer from './components/Container'; // Assuming you already have this component imported


function App() {
  return (
    <div className='bgApp'>
      <Header />

      <BackgroundImageComponent img={img} />
  
   

      <CustomContainer title="Import Your Data" width='70%' >
        <p style={{fontFamily: 'Outfit, sans-serif', fontSize:'20px',opacity:'0.7',marginBottom:'80px'}}>you can drag and drop multiple files of simply click to browse your files </p>
      <FileInput   />
      </CustomContainer>
      <CustomContainer title="Well Logs Plot" width='93%' height='800px' ></CustomContainer>
    </div>
  );
}

export default App;
