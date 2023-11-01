// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Imag = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       (prevIndex + 1) % images.length
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="relative w-full h-96">
//       <div className="flex items-center justify-center h-full">
//         <img
//           src={require(`./assets/${images[currentImageIndex]}`)}
//           alt={`Image ${currentImageIndex}`}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
//         onClick={prevImage}
//       >
//         <FaChevronLeft size={24} />
//       </button>

//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
//         onClick={nextImage}
//       >
//         <FaChevronRight size={24} />
//       </button>

      
//       {/* ... rest of your component */}
//     </div>
//   );
// };

// export default Imag;