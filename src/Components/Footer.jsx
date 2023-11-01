import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { BsTelephoneFill, BsYoutube, BsTwitter } from 'react-icons/bs'
import {PiPaperPlaneRightFill} from 'react-icons/pi'
import {MdEmail} from 'react-icons/md'
const Footer = () =>{

    return(
        <>
        <div className="flex justify-center -my-5 md:-my-16 bg-white  shadow-2xl  px-5 md:px-8 md:pt-36 lg:px-24 w-full">
            <div className="flex justify-center gap-3 md:justify-between w-full md:ps-10 md:pr-20 lg:ps-16 lg:pr-60 bg-white rounded-2xl  items-center py-5  md:w-4/5">
                <div className="flex items-center gap-3 ">
                    <div className="bg-blue-700 p-2 md:p-4 rounded-full">
                        <MdEmail className='text-white md:text-xl' />
                    </div>
                    <h1 className="text-xs md:text-md text-black font-semibold tracking-widest">info@youremail.com</h1>
 
                    
                </div>
                <div className="flex  ps-2 border-l-2 border-black md:ps-8 items-center md:gap-3">
                    
                    <div className="bg-blue-700 p-2 md:p-4 rounded-full">
                        <BsTelephoneFill className='text-white text-xl' />
                    </div>
                    <h1 className="text-xs md:text-md text-black font-semibold lg:tracking-wide">+880 321 655 9965</h1> 

                    
                </div>
                
            </div>
        </div>
        <div className="bg-gray-950 text-white pt-24 px-5 md:px-10 md:pt-36 lg:px-20 lg:pt-48">
            <div className="flex flex-col pb-7 md:flex-row gap-16 ">
                <div className="flex-col">
                    <h1 className="text-lg md:text-xl font-bold uppercase pb-2">logo</h1>
                    <h1 className="text-xs  md:leading-normal lg:leading-7 lg:tracking-wider  pb-4 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
                <br /> vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                <br />  ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna,feugiat.
                </h1>
                <div className="flex   text-white items-center gap-5 ">
                        <FaFacebookF className=' text-blue-700' />
                        <h1>|</h1>
                        <AiFillInstagram className=' text-white' />
                        <h1>|</h1>
                         < BsTwitter   className=' text-white' />
                         <h1>|</h1>
                         < BsYoutube className=' text-white' />
                        </div>
                </div>
                <div className="flex-col">
                    <h1 className="text-md  font-bold uppercase pb-2 md:pr-0 md:text-md lg:pr-28">quick link</h1>
                    <ul className="text-xs capitalize space-y-5">
                        <li className="hover:opacity-50">about</li>
                        <li className="hover:opacity-50">features</li>
                        <li className="hover:opacity-50">screebshot</li>
                        <li className="hover:opacity-50">blog</li>
                   
                    </ul>
                </div>
                <div className="flex-col">
                <h1 className="text-lg md:text-xl font-bold uppercase pb-2">news letter</h1> 
                <h1 className="text-xs">Subscribe our newsletter to get our latest
                <br />updates & news
                </h1>
                <div className="flex justify-between bg-white text-black rounded p-1 mt-10  ">
                    <input type="text" placeholder='Your email address' className='border-collapse outline-none ps-3 ' rounded />
                    
                    <div className="rounded bg-blue-700 p-2">
                    <PiPaperPlaneRightFill className='text-xl text-white' />
                    </div>
                    
                </div>
                </div>
                

            </div> 
            <div className="text-center py-3 border-t border-white border-x-0 border-b-0 border-4">
                <h1 className='text-sm capitalize'>Copyright 2021 .ojjomedia. All Right reserved</h1>
            </div>
        </div>
        </>
    )
}
export default Footer