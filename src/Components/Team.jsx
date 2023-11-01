import dev1 from '../assets/carla.png'
import dev2 from '../assets/craig.png'
import dev3 from '../assets/jocelyn.png'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { BsYoutube, BsTwitter } from 'react-icons/bs'
const Team = () =>{

    return(
        <>
          <h1 className="text-xl text-center pt-0 md:pt-48 lg:pt-52 pb-5 font-bold md:text-3xl uppercase">
            our relative team
          </h1>
          <h1 className="text-xs text-center px-5 leading-normal md:text-sm md:leading-7 tracking-wider  pb-10 md:pb-16 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
                <br /> vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                <br />  ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna,feugiat.
                </h1>
                
                <div className="flex flex-col px-5 md:grid md:grid-cols-2 md:px-5 md:gap-3 lg:px-10 lg:grid lg:grid-cols-3 justify-center lg:gap-5 pb-16 lg:w-full">
                    <div className= "text-center p-5   shadow-2xl rounded mb-5 md:mb-0">
                        <div className="flex justify-center ">
                            <img src={dev1} alt="" className='w-1/2  border-4 border-dashed rounded-full border-blue-600'/>
                        </div>
                        <h1 className="text-xl font-bold pt-5 uppercase">
                            carla press
                        </h1>
                        <h1 className="text-sm text-gray-500 uppercase">app developer</h1>
                        <h1 className="text-xs text-gray-500 leading-5 pt-4 pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                        <div className="flex justify-center items-center gap-5 md:px-5 ">
                        <FaFacebookF className=' text-blue-700' />
                        <h1>|</h1>
                        <AiFillInstagram className=' text-black' />
                        <h1>|</h1>
                         < BsTwitter   className=' text-black' />
                         <h1>|</h1>
                         < BsYoutube className=' text-black' />
                        </div>
                    </div>
                    <div className= "text-center p-5 shadow-2xl rounded mb-5 md:mb-0">
                        <div className="flex justify-center ">
                            <img src={dev2} alt="" className='w-1/2  border-4 border-dashed rounded-full border-blue-600'/>
                        </div>
                        <h1 className="text-xl font-bold pt-5 uppercase">
                            craig Gouse
                        </h1>
                        <h1 className="text-sm text-gray-500 uppercase">ui/ux designer</h1>
                        <h1 className="text-xs text-gray-500 leading-5 pt-4 pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                        <div className="flex justify-center items-center gap-5 md:px-5 ">
                        <FaFacebookF className=' text-blue-700' />
                        <h1>|</h1>
                        <AiFillInstagram className=' text-black' />
                        <h1>|</h1>
                         < BsTwitter   className=' text-black' />
                         <h1>|</h1>
                         < BsYoutube className=' text-black' />
                        </div>
                    </div>

                    <div className= "hidden md:hidden lg:grid grid-cols text-center p-5 shadow-2xl rounded">
                        
                        <div className="flex justify-center ">
                            <img src={dev3} alt="" className='w-1/2  border-4 border-dashed rounded-full border-blue-600'/>
                        </div>
                        <h1 className="text-xl font-bold pt-5 uppercase">
                            jocelyn septimus
                        </h1>
                        <h1 className="text-sm text-gray-500 uppercase">website developer</h1>
                        <h1 className="text-xs text-gray-500 leading-5 pt-4 pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                        <div className="flex justify-center items-center gap-5 md:px-5 ">
                        <FaFacebookF className=' text-blue-700' />
                        <h1>|</h1>
                        <AiFillInstagram className=' text-black' />
                        <h1>|</h1>
                         < BsTwitter   className=' text-black' />
                         <h1>|</h1>
                         < BsYoutube className=' text-black' />
                        </div>
                    
                    
                    </div>
                    
                    <div className= "md:hidden lg:flex-col text-center p-5 shadow-2xl rounded ">
                        
                        <div className="flex justify-center ">
                            <img src={dev3} alt="" className='w-1/2  border-4 border-dashed rounded-full border-blue-600'/>
                        </div>
                        <h1 className="text-xl font-bold pt-5 uppercase">
                            jocelyn septimus
                        </h1>
                        <h1 className="text-sm text-gray-500 uppercase">website developer</h1>
                        <h1 className="text-xs text-gray-500 leading-5 pt-4 pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                        <div className="flex justify-center items-center gap-5 md:px-5 ">
                        <FaFacebookF className=' text-blue-700' />
                        <h1>|</h1>
                        <AiFillInstagram className=' text-black' />
                        <h1>|</h1>
                         < BsTwitter   className=' text-black' />
                         <h1>|</h1>
                         < BsYoutube className=' text-black' />
                        </div>
                    
                    
                    </div>
                  
                   
                </div>
                <div className="hidden lg:hidden md:flex justify-center px-48 pb-10 w-full">
                    <div className= "block text-center p-5 w-full shadow-2xl rounded">
                        
                        <div className="flex justify-center ">
                            <img src={dev3} alt="" className='w-1/2  border-4 border-dashed rounded-full border-blue-600'/>
                        </div>
                        <h1 className="text-xl font-bold pt-5 uppercase">
                            jocelyn septimus
                        </h1>
                        <h1 className="text-sm text-gray-500 uppercase">website developer</h1>
                        <h1 className="text-xs text-gray-500 leading-5 pt-4 pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                        <div className="flex justify-center items-center gap-5 md:px-5 ">
                        <FaFacebookF className=' text-blue-700' />
                        <h1>|</h1>
                        <AiFillInstagram className=' text-black' />
                        <h1>|</h1>
                         < BsTwitter   className=' text-black' />
                         <h1>|</h1>
                         < BsYoutube className=' text-black' />
                        </div>
                    
                    
                    </div>
                    </div>

        </>
    )
}
export default Team