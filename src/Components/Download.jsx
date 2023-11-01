import googleplay from '../assets/toppng 1.png'
import appplestore from '../assets/toppng 2.png'
import nowphone from '../assets/Gravity.png'
import {FiDownload} from 'react-icons/fi'
import {AiFillLike, AiFillStar} from 'react-icons/ai'

const Down = () =>{

    return(
        <>
       <div className="flex flex-col px-5 py-10 md:flex-row md:px-8 md:py-12 lg:flex-row lg:px-16 lg:py-16 w-full items-center ">
        <div className="flex-col w-full md:w-1/2 md:space-y-0 lg:space-y-9">
            <h1 className="text-2xl text-center font-semibold pb-2 md:3xl md:text-left md:font-bold uppercase">
                download app now
            </h1>
            <h1 className="text-sm md:text-xs md:leading-0 lg:leading-7 tracking-wider text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
        <br /> vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt ,
        <br /> rhoncus ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna,
        <br /> feugiat.
        </h1>
            <div className="flex pt-5 pb-10 gap-5 ">
                    <a href=''><img src={googleplay} alt=''  className=':w-full' /></a>
                    <a href=''><img src={appplestore} alt='' className='w-full' /></a>
                </div>
                <div className="flex pb-8 md:pb-0 gap-5">
                    <div className="bg-blue-700 w-28 px-2 pt-4 pb-2 text-xs  text-white text-center font-bold rounded">
                        <div className="flex justify-center pb-2">
                        <FiDownload className='text-2xl' />
                        </div>
                        <h1 className='text-sm'>59865</h1>
                        <h1 className="uppercase pt-2">download</h1>
                    </div>
                    <div className="bg-blue-700 w-28 px-2 pt-4 pb-2 text-xs text-white text-center font-bold rounded">
                        <div className="flex justify-center pb-2">
                        <AiFillLike className='text-2xl' />
                        </div>
                        <h1 className='text-sm'>29852</h1>
                        <h1 className="uppercase pt-2">like</h1>
                    </div>
                    <div className="bg-blue-700 w-28 px-2 pt-4 pb-2 text-xs text-white text-center font-bold rounded">
                        <div className="flex justify-center pb-2">
                        <AiFillStar className='text-2xl' />
                        </div>
                        <h1 className='text-sm'>1500</h1>
                        <h1 className="uppercase pt-2  ">5 star rating</h1>
                    </div>
                </div>
        </div>
        <div className="h-full w-full md:w-1/2 ">
            <img src={nowphone} alt="" />
        </div>
       </div>

        </>
    )
}
export default Down