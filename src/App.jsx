
import Herosection from './Components/Hero';
import About from './Components/About';
import Feature from './Components/Features';
import Checkpage from './Components/Checkout';
import './App.css'

const App = () => {
  
  return (
   <div className='font-Josefin overflow-x-hidden'>
   
    <Herosection />
    <About / >
    <Feature />
    <Checkpage />
   </div>
  )
}

export default App
