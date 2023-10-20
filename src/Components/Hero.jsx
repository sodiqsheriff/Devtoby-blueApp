import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill, BsYoutube, BsTwitter } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assets/Logo.png'
import rectangle from '../assets/Rectangle.png'
import mobile from '../assets/Mobile.png'
import googleplay from '../assets/toppng 1.png'
import appplestore from '../assets/toppng 2.png'


const hero = () => {
  
  return (
    <>
     <div className="w-full  bg-blue-700 mb-16 ">
        <div className="hidden md:flex items-center justify-between pt-5 pb-3 px-20">
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
<div className="w-full px-5 pt-10 pb-10 md:px-16  lg:px-20 lg:pt-0">
    <div className="flex ps-5 gap-36 items-center  bg-white rounded shadow-2xl md:ps-10    w-full text-black">
    <GiHamburgerMenu className="text-black text-4xl md:text-2xl items-center lg:hidden" />
        <div className="hidden md:hidden lg:flex space-x-12 text-md  uppercase relative py-3 ">  
            <a href="" className='hover:text-blue-500 hover:underline '>Home</a>
            <a href="" className='hover:text-blue-500 hover:underline '>about</a>
            <a href="" className='hover:text-blue-500 hover:underline'>features</a>
        </div>
        <div className="flex gap-5 md:gap-10 justify-between lg:hidden">
        <div className="flex items-center shadow-2xl h-20 w- mx-auto -my-5 bg-white rounded">
            <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-right md:ps-28">
            <a href="" className='bg-blue-600 shadow-2xl rounded p-2 m-1  text-white  uppercase'>download</a>

            </div>
        </div>
        
           
        <div className="hidden md:hidden lg:flex md:gap-5  text-md  space-x-16   uppercase items-center">
        <div className="flex items-center shadow-2xl h-20 mx-auto -my-10 bg-white rounded">
            <img src={logo} alt="logo" />
            </div>
            <a href="" className='hover:text-blue-500 hover:underline '>screenshots</a>
            <a href="" className='hover:text-blue-500 hover:underline '>blog</a>
            <a href="" className='bg-blue-600 shadow-2xl rounded p-2 mr-1  text-white  uppercase'>download</a>
        </div>
    </div>
</div>
   <div className="block space-y-10 px-0 w-full  md:flex md:flex-row md:space-y-0 md:items-center justify-between md:px-10 md:py-14 lg:flex lg:flex-row lg:items-center gap-10 lg:px-20 lg:gap-24 lg:py-16 lg:space-y-0">
    <div className='pb-7 md:w-1/2'>
        <div className="ml-5  my-3 absolute left-0 bg-white md:w-[270px] lg:w-[500px]  p-5  md:ml-16 md:my-5 lg:ml-20 lg:my-10">
            <div className="text-2xl md:text-[20px] lg:text-[42px] text-blue-600  font-semibold uppercase ">
            <h1 className='pb-0 md:pb-1 lg:pb-3'>
                a great app makes 
            </h1>
            <h1>your life better</h1>
            </div>
            <div className="text-sm tracking-wide  text-black space-y-1 md:text-xs md:space-y-0 md:mt-2 lg:mt-6">
                <h1>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do</h1>
                <h1>amet sint. Velit officia consequat duis enim velit mollit. Exercitation</h1>
                <h1> veniam consequat sunt nostrud amet.</h1>  
            </div>
            <div className="md:pt-5 lg:pt-12">
                <h1 className="text-2xl md:text-xl lg:text-[27px] text-black font-semibold uppercase pb-2">download app now</h1>
                <div className="flex gap-5">
                    <a href=''><img src={googleplay} alt='' /></a>
                    <a href=''><img src={appplestore} alt='' /></a>
                </div>
            </div>
        </div>
        <img src={rectangle} alt="rectangle" className='pl-20' />
    </div>
    <div className="ps-28 md:w-1/2 md:ps-0 lg:ps-0">
        <img src={mobile} alt="mobile" className=''/>
    </div>
   </div>
     </div>
     
    </>
  )
}

export default hero
