import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Ellipse from './components/Ellipse';
import './App.css';
import BackgroundImageComponent from './components/bgimage';
import img from './assets/images/testbg.png';
import CustomContainer from './components/Container'; // Import the new component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bgApp'>
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
