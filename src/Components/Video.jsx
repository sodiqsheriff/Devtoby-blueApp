import steps from '../assets/Imagevid.png';
const Video = () =>{

    return(
        <>
        <div className="text-center  text-white bg-blue-700 px-5 pt-14 pb-16 md:px-0">
            <h1 className="text-xl md:text-3xl  font-bold pb-5 uppercase">
                how to use the app perfectly
            </h1>
            
             <h1 className="text-xs md:text-sm md:leading-7 tracking-wider  pb-36 md:pb-48 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit 
                <br /> vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                <br />  ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna,feugiat.
                </h1>
            
             
        </div>
        <div className="flex justify-center pb-16 mb-16 -my-24 px-5 md:-my-48 md:px-5 overflow-y-hidden">
                 <img src={steps} alt=""/>
             </div>

        </>
    )
}
export default Video