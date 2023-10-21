import { MdMessage } from "react-icons/md"
import feed from '../assets/feed.png'
import phone from '../assets/004.png'
import vector from '../assets/vector.png'
import data from '../assets/cell-phone.png'
import eye from '../assets/eye-scanner 1.png'
import service from '../assets/male-telemarketer.png'
const Feature = () =>{

    return(
        <>
        <div className='bg-blue-600 text-white py-10 md:py-16 lg:py-20 md:mb-16 lg:mb-20'>
        <div className="text-center pb-10">
            <h1 className="text-2xl font-semibold md:text-3xl md:font-bold  uppercase">app features</h1>
            <h1 className="pt-7 pb-10 text-xs md:text-sm leading-2 md:leading-3 lg:leading-6 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
                <br />vitae.Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                <br />ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </h1>
                <div className="flex justify-center ">
                <MdMessage className='text-white text-5xl' />
                </div>
                <h1 className="py-5 text-2xl uppercase">full free chat</h1>
                <h1 className="text-xs md:text-sm text-center">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</h1>
        
        </div>
        <div className="px-5 pt-10 w-full md:flex md:px-8 md:gap-7 lg:flex lg:px-20 lg:gap-0 items-center justify-center">
            <div className=" space-y-6 md:space-y-16 lg:space-y-28">
                <div>
                    <div className="flex justify-center md:justify-end">
                        <img src={feed} alt="" />
                    </div>
                    <h1 className="text-xl text-center md:text-right py-3">UNLIMITED FEATURES</h1>
                    <h1 className="text-xs text-white text-center md:text-right">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</h1>
                </div>
                <div>
                    <div className="flex justify-center md:justify-end">
                        <img src={vector} alt="" />
                    </div>
                    <h1 className="text-xl text-center md:text-right py-3">AWESOME DESIGN</h1>
                    <h1 className="text-xs text-white text-center md:text-right">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</h1>
                </div>
            </div>
            <div className='flex justify-center p-0 m-0'>
                <img src={phone} alt='' className="" />
            </div>
            <div className=" space-y-6 md:space-y-16 lg:space-y-28">
                <div>
                    <div className="flex justify-center md:justify-start ">
                        <img src={data} alt="" />
                    </div>
                    <h1 className="text-xl text-center md:text-left lg:text-left  py-3">ISO & ANDROID VERSION</h1>
                    <h1 className="text-xs text-white text-center md:text-left ">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</h1>
                </div>
                <div>
                    <div className="flex justify-center md:justify-start ">
                        <img src={eye} alt="" />
                    </div>
                    <h1 className="text-xl text-center md:text-left  py-3">RECTINA READY GRAPHICS</h1>
                    <h1 className="text-xs text-white text-center md:text-left">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</h1>
                </div>
                
            </div>
        </div>
        <div className="text-center pt-10">
            <span className="flex justify-center">
            <img src={service} alt=""  />
            </span>
                   <span className="space-y-4">
                   <h1 className="text-xl uppercase pt-5">24/7 support by real people</h1>
                    <h1 className=" text-xs ">Lorem ipsum dolor sit amet, consectetur</h1>
                   </span>
                    
                </div>
        </div>

        
 </>
    )
}
export default Feature