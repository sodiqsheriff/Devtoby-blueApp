import { useState } from 'react'
import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill, BsYoutube, BsTwitter } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import logo from '../assets/Logo.png'
import rectangle from '../assets/Rectangle.png'
import mobile from '../assets/Mobile.png'
import googleplay from '../assets/toppng 1.png'
import appplestore from '../assets/toppng 2.png'


const hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
       setIsOpen(!isOpen);
    };
  return (
    <>
     <div className="w-full  bg-blue-700 mb-16 ">
        <div className="hidden md:flex items-center justify-between pt-5 pb-3 md:px-8 lg:px-20">
            <div className="flex gap-5 text-xs text-white">
                <span className="flex items-center gap-2">
                    <MdEmail />
                    <h1>info@youremail.com</h1>
                </span>
                <span className="flex items-center gap-2">
                    <BsTelephoneFill />
                    <h1>(480) 555-0103</h1>
                </span>
            </div>
            <div className="flex items-center gap-2 text-white">
                <FaFacebookF />
                <AiFillInstagram />
                <BsTwitter />
                <BsYoutube />
            </div>
        </div>

{/*Navbar */}
<div className="w-full px-5 pt-10 pb-10 md:pt-5 md:px-8  lg:px-20 lg:pt-0">
    <div className="flex justify-between ps-5  items-center  bg-white rounded shadow-2xl md:ps-5 lg:ps-5  w-full text-black">
    
    <button className='flex text-4xl   lg:hidden ' onClick={toggleMenu}>
        {isOpen ?( <MdOutlineClose />): <GiHamburgerMenu /> }
      </button>
      {isOpen  &&(
         <ul className='absolute top-0 right-0 left-0 bottom-0 w-full h-full  space-y-5  bg-black md:space-y-9 pt-7 px-10 lg:hidden ' onClick={toggleMenu}>
          <MdOutlineClose className=' text-4xl ' />
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
    
            <a href="#">Overview</a>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
        
            <a href="#">Payments</a>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
    
            <a href="#">Loans</a>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
    
            <a href="#">Savings</a>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            
            <a href="#">Payments Method</a>
          </li>
          <li className="flex text-gray-300 hover:text-blue-900 text-lg capitalize font-semibold gap-3">
            
            <a href="#">Settings</a>
          </li>
        
         </ul>


    

      )}
    {/* <GiHamburgerMenu className="text-black text-4xl md:text-2xl items-center lg:hidden" /> */}
        <div className="hidden md:hidden lg:flex justify-between items-center ps-5  text-md  uppercase relative py-3 ">  
            <div className="flex gap-10">
            <a href="" className='hover:text-blue-500 hover:underline '>Home</a>
            <a href="" className='hover:text-blue-500 hover:underline '>about</a>
            <a href="" className='hover:text-blue-500 hover:underline'>features</a>
            </div>
            <div className="flex items-center shadow-2xl h-20 -my-10 bg-white rounded mx-48">
            <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-flex-end items-center  gap-10">
            <a href="" className='hover:text-blue-500 hover:underline '>screenshots</a>
            <a href="" className='hover:text-blue-500 hover:underline '>blog</a>
            <a href="" className='bg-blue-600 shadow-2xl rounded p-1  mr-2 text-white  uppercase'>download</a>
            </div>
            {/* <a href="" className='hover:text-blue-500 hover:underline '>Home</a>
            <a href="" className='hover:text-blue-500 hover:underline '>about</a>
            <a href="" className='hover:text-blue-500 hover:underline'>features</a>
        </div>
        <div className="flex gap-5 md:gap-10 justify-between lg:hidden">
        <div className="flex items-center shadow-2xl h-20 w-24 md:h-20 md:w-48 -my-4 mx-auto md:-my-5 bg-white rounded">
            <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-right md:ps-28">
            <a href="" className='bg-blue-600 shadow-2xl rounded p-2 m-1  text-white  uppercase'>download</a>

            </div>
        </div>
        
           
        <div className="hidden md:hidden lg:flex gap-10 text-md uppercase items-center">
        <div className="flex items-center shadow-2xl h-20 mx-auto -my-10 bg-white rounded">
            <img src={logo} alt="logo" />
            </div>
            <a href="" className='hover:text-blue-500 hover:underline '>screenshots</a>
            <a href="" className='hover:text-blue-500 hover:underline '>blog</a>
            <a href="" className='bg-blue-600 shadow-2xl rounded p-2  mr-2 text-white  uppercase'>download</a> */}
        </div>
        <div className="flex justify-between">
        <div className="flex items-center shadow-2xl h-16 mx-10 mr-5 -my-5 md:h-24 md:-my-10 bg-white rounded md:mr-36 ">
            <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-flex-end items-center  gap-10">
            <a href="" className='bg-blue-600 shadow-2xl rounded p-1  mr-2 text-white  uppercase'>download</a>
            </div>
        </div>
    </div>
</div>
   <div className="block space-y-10 px-0 w-full  md:flex md:flex-row md:space-y-0 md:items-center justify-between md:px-0 md:py-14 lg:flex lg:flex-row lg:items-center gap-10 lg:px-20 lg:gap-24 lg:py-16 lg:space-y-0">
    <div className='w-full pb-7  md:w-1/2'>
        <div className="ml-5 mr-8  my-4 p-5 absolute   bg-white md:w-[320px] md:ml-10 md:my-5 md:space-y-0 md:px-5 md:py-2  lg:w-[500px] lg:ml-0 lg:my-10 lg:p-5 lg:space-y-6">
            <div className="text-2xl md:text-2xl lg:text-[42px] text-blue-600   font-semibold uppercase ">
            <h1 className='pb-0 md:pb-0 lg:pb-5 w-full tracking-wide'>
                a great app makes 
            </h1>
            <h1>your life better</h1>
            </div>
            <div className="text-xs tracking-wide  text-black space-y-1 md:text-xs lg:text-sm md:space-y-0 md:mt-1 md:pt-2 lg:pt-3  lg:mt-6">
                <h1>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do</h1>
                <h1>amet sint. Velit officia consequat duis enim velit mollit. Exercitation</h1>
                <h1> veniam consequat sunt nostrud amet.</h1>  
            </div>
            <div className="md:pt-2 lg:pt-12">
                <h1 className="text-2xl md:text-xl lg:text-[27px] text-black font-semibold uppercase pb-2">download app now</h1>
                <div className="flex gap-3 md:gap-5">
                    <a href=''><img src={googleplay} alt='' /></a>
                    <a href=''><img src={appplestore} alt='' /></a>
                </div>
            </div>
        </div>
        <div className="w-full">
        <img src={rectangle} alt="rectangle" className='pl-10 pr-5 m-2 md:pl-20 md:pr-0 w-full' />
        </div>
       
    </div>
    <div className="w-full md:w-1/2">
        <img src={mobile} alt="mobile" className='w-full p-8 md:w-72'/>
    </div>
   </div>
     </div>
     
    </>
  )
}

export default hero
