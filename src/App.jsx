import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Course from './course/Course';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
// import Signup from './components/Signup';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
      </Routes>
    <Footer />
    </>
  )
}

export default App
// import React from "react";

// const App = () => {
//   return (
//     <>
//       <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
//         <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
//           Writes upside-down
//         </h3>
//         <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
//           The Zero Gravity Pen can be used to write in any orientation,
//           including upside-down. It even works in outer space.
//         </p>
//         <button
//   className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
//   Button
// </button>
//       </div>


//     </>
//   );
// };

// export default App;
