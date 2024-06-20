// App.jsx

import React from 'react';
import './App.css';
import Header from './components/Header';
import BackgroundImageComponent from './components/bgimage';
import Container from './components/Container';
import FileInput from './components/FileInput';
import Button from './components/button'; // Import Button

// Import the image
import img from './assets/images/testbg.png';

function App() {
  const handleGenerate = () => {
    // Implement the logic to handle generate button click
    console.log('Generating visualization...');
    // Example: Call backend API or perform any necessary action
  };

  return (
    <div className='bgApp'>
      <Header />
      <BackgroundImageComponent img={img} />

      <Container title="Import Your Data" width='70%'>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', opacity: '0.7', marginBottom: '80px' }}>
          You can drag and drop multiple files or simply click to browse your files.
        </p>
        <FileInput />
      </Container>

      <Container
        title="Well Logs Plot"
        width='93%'
        height='800px'
      >
        <Button label="Generate" onClick={handleGenerate} />
        {/* Visualization content here */}
      </Container>
    </div>
  );
}

export default App;
