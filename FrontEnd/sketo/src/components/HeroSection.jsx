// import React from "react";
// import Navbar from "./Navbar";

// const HeroSection = () => {
//   return (
//     <section className="bg-slate-500 text-white text-end py-5 px-6 h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center ">
//       <Navbar />
//       <div className="pt-20  flex flex-col  items-end  b">
//         <h1 className="text-8xl  font-bold text-white  filter drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//           Machine <br />
//           Learning
//         </h1>
//         <p className="mt-4 w-[30%] text-center text-lg">
//           Since 1998, NYIM Training has offered results-oriented business
//           courses and corporate training in New York. Discover our
//           industry-leading courses and certifications in data analytics, project
//           management, office productivity, and financial modeling.
//         </p>
//         <button className="rounded-full bg-blue-400 px-4 py-2 ">
//             Read More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="bg-slate-500 text-white py-5 px-6 h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center">
      <Navbar />
      <div className="pt-20 flex flex-col items-center md:items-end text-center md:text-end">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white filter drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
          Machine <br />
          Learning
        </h1>
        {/* Paragraph */}
        <p className="mt-4 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] text-center md:text-end text-sm md:text-lg">
          Since 1998, NYIM Training has offered results-oriented business
          courses and corporate training in New York. Discover our
          industry-leading courses and certifications in data analytics, project
          management, office productivity, and financial modeling.
        </p>
        {/* Button */}
        <button className="mt-6 rounded-full bg-blue-400 px-6 py-2 text-sm md:text-base hover:bg-blue-500 transition duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
