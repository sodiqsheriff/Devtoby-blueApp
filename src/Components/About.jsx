
import android from '../assets/android.png'
import {RiCheckboxCircleFill} from 'react-icons/ri'

const About = () => {
  
  return (
    <>
    <div className='text-center p-5'>
    <h1 className=" font-semibold text-2xl md:text-3xl lg:text-4xl uppercase pb-5">about our app</h1>
     <h1 className="text-xs md:text-sm leading-2 md:leading-3 lg:leading-7 tracking-wide">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
     <br />vitae.Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
      <br />ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
     </h1>
    </div>
     
     <div className="px-5 pt-7 pb-16 mb-10 md:flex gap-10 md:px-10 md:pt-10 md:pb-24 md:mb-16 lg:flex lg:px-20 lg:pt-12 lg:pb-28 lg:mb-16 lg:gap-12 lg:items-center w-full">
      <div className="md:w-1/2">
        <img src={android} alt="w-full" />
      </div>
      <div className="md:w-1/2  space-y-4 ">
        <div className="bg-white w-full shadow-2xl p-5 rounded">
          <div className="flex items-center gap-3">
            <RiCheckboxCircleFill className='text-blue-600 text-xl' />
            <h1 className="text-md font-bold uppercase">creative design</h1>
          </div>
          <h1 className='pt-7 ps-8 text-xs md:text-sm leading-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            <br /> nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
             <br /> amet etiam tincidunt rhoncus, ullamcorper velit.
            </h1>
        </div>
        <div className="bg-white w-full shadow-2xl p-5 rounded">
          <div className="flex items-center gap-3">
            <RiCheckboxCircleFill className='text-blue-600 text-xl' />
            <h1 className="text-md font-bold uppercase">easy to use</h1>
          </div>
          <h1 className='pt-7 ps-8 text-xs md:text-sm leading-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            <br /> nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
             <br /> amet etiam tincidunt rhoncus, ullamcorper velit.
            </h1>
        </div>
        <div className="w-full bg-white shadow-2xl p-5 rounded">
          <div className="flex items-center gap-3">
            <RiCheckboxCircleFill className='text-blue-600 text-xl' />
            <h1 className="text-md font-bold uppercase">best user experience</h1>
          </div>
          <h1 className='pt-5 ps-8 text-xs md:text-sm leading-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            <br /> nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
             <br /> amet etiam tincidunt rhoncus, ullamcorper velit.
            </h1>
        </div>

      </div>
     </div>
    </>
  )
}

export default About
