import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
      {/* <img src={image} alt={title} className="w-20 h-20 mb-4" /> */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="text-blue-500 font-medium hover:underline flex items-center">
        Learn more <span className="ml-2 text-lg">→</span>
      </button>
    </div>
  );
};

const Cards = () => {
  const data = [
    {
      title: "Microsoft Excel",
      description:
        "Master Microsoft Excel, the most crucial tool used by business professionals today. Learn functions, formulas, VLOOKUP, Pivot Tables, and VBA programming.",
      image: "./assets/bg.jpg",
    },
    {
      title: "Python",
      description:
        "Master programming principles, data science using Jupyter, and automation workflows in Python, one of the most versatile programming languages.",
      image: "./assets/python-icon.png",
    },
    {
      title: "Data Analytics",
      description:
        "Analyze, summarize, and visualize data with Excel, SQL, Tableau, and Python. Master the tools you need to become a data analyst or data scientist.",
      image: "./assets/analytics-icon.png",
    },
    {
      title: "Programming",
      description:
        "Become a developer or software engineer by coding dynamic websites, machine learning algorithms, and automating daily tasks.",
      image: "./assets/programming-icon.png",
    },
    {
      title: "Microsoft Office",
      description:
        "Increase your productivity with Microsoft Office training, or boost your credentials with certification programs.",
      image: "./assets/office-icon.png",
    },
    {
      title: "Design",
      description:
        "Launch your design career by learning in-demand skills: graphic design, web design, UX, and motion graphics.",
      image: "./assets/design-icon.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

// import React from "react";
// import { MdOutlineReadMore } from "react-icons/md";

// const Card = ({ title, description, icon }) => {
//   return (
//     // <div className="bg-zinc-300 shadow-md p-6 rounded-lg text-center">
//     //   <div className="text-4xl mb-4">{icon}</div>
//     //   <h2 className="text-xl font-bold mb-2">{title}</h2>
//     //   <p>{description}</p>
//     // </div>
//     <div className="flex justify-center items-center">
//       <div className="flex w-80 justify-center items-center ">
//         <div className=" bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
//           {/* Title */}
//           <div className="px-6 py-4 bg-black text-white text-center">
//             <h2 className="text-xl font-bold">Hoverable Card</h2>
//           </div>

//           {/* Image */}
//           <img
//             src="https://via.placeholder.com/400x200"
//             alt="Card Example"
//             className="w-full  object-cover"
//           />

//           {/* Paragraph */}
//           <div className="p-6">
//             <p className="text-gray-700 text-base">
//               This is a hoverable card that scales up when you hover over it.
//               You can customize it with your own content, styles, and
//               functionality.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
