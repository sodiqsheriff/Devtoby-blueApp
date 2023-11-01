import React from 'react';

import Herosection from './Components/Hero';
import About from './Components/About';
import Feature from './Components/Features';
import Checkpage from './Components/Checkout';
import Down from './Components/Download';
import Video from './Components/Video';
import Team from './Components/Team';
import Customer from './Components/Customer';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

import './App.css'



const App = () => {
  
  return (
   <div className='font-Josefin overflow-x-hidden'>
   
    <Herosection />
    <About / >
    <Feature />
    <Checkpage />
    <Down />
    <Video />
    <Team />
    <Customer />
    <Blog />
    <Footer />
   </div>
  )
}

export default App;
