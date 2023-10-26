
import Herosection from './Components/Hero';
import About from './Components/About';
import Feature from './Components/Features';
import Checkpage from './Components/Checkout';

import './App.css'

import Image from './Components/Imageslider';
import Down from './Components/Download';
const images = [
  'image1',
  'image2',
  'image3',
  'image4',
  //'image5.png',
  // Add more image URLs as needed
];

const App = () => {
  
  return (
   <div className='font-Josefin overflow-x-hidden'>
   
    <Herosection />
    <About / >
    <Feature />
    <Checkpage />
    <Image images={images} />
    <Down />
   </div>
  )
}

export default App
