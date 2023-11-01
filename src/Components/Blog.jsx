import phone1 from '../assets/snap.png'
import phone2 from '../assets/global.png'
import phone3 from '../assets/fresh.png'
const Blog = () =>{

    return(
        <>
        <h1 className="text-xl text-center pt-0 md:pt-16  pb-5 font-bold md:text-3xl uppercase">
            our recent blog
          </h1>
          <h1 className="text-xs px-5 text-center md:text-sm md:leading-7 tracking-wider  pb-10 md:pb-16 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
                <br /> vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                <br />  ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna,feugiat.
                </h1>
                <div className="flex flex-col px-5 md:flex-row justify-center md:px-12 md:gap-3 lg:px-16 lg:gap-5 pb-16 w-full">
                    <div className= "mb-5 md:mb-0 shadow-2xl rounded">
                        <div className="shadow-2xl">
                            <img src={phone1} alt="" className=''/>
                        </div>
                        <div className='p-5'>
                        <h1 className="text-lg font-semibold tracking-wider  py-3 uppercase">
                            the snap pixel: how it
                            <br />works and how to install
                        </h1>
                       
                        <h1 className="text-xs tracking-widest text-gray-500 leading-5  pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                       
                       <a href="" className='text-xl text-blue-700 underline uppercase'>read more</a>
                       </div>
                    </div>
                    <div className= "mb-5 md:mb-0 shadow-2xl rounded">
                        <div className="shadow-2xl">
                            <img src={phone2} alt="" className=''/>
                        </div>
                        <div className='ps-5 py-5'>
                        <h1 className="text-lg font-semibold tracking-wider  py-3 uppercase">
                           global partner solutions: a
                            <br />partnership of innovation
                        </h1>
                       
                        <h1 className="text-xs tracking-widest text-gray-500 leading-5  pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                       
                       <a href="" className='text-xl text-blue-700 underline uppercase'>read more</a>
                       </div>
                    </div>
                    <div className= " shadow-2xl rounded">
                        <div className="shadow-2xl">
                            <img src={phone3} alt="" className=''/>
                        </div>
                        <div className='ps-5 pt-5'>
                        <h1 className="text-lg font-semibold tracking-wider  py-3 uppercase">
                           2021: an opportunity for
                            <br />snapchatters to start fresh
                        </h1>
                       
                        <h1 className="text-xs tracking-widest text-gray-500 leading-5  pb-3">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />adipiscing elit. Viverra nunc ante velit vitae.
                            <br />Est tellus vitae.
                        </h1>
                       
                       <a href="" className='text-xl text-blue-700 underline uppercase'>read more</a>
                       </div>
                    </div>
                  
                </div>

        </>
    )
}
export default Blog