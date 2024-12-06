import React from "react";

// Sample data for cards
const bootcamps = [
  {
    title: "Excel for Business Bootcamp",
    description:
      "Become an advanced Microsoft Excel user in just three days. This Excel Bootcamp includes 18 hours of hands-on training in formulas, functions, Pivot Tables, macros & more.",
    price: "$549",
    hours: "18 Hours",
  },
  {
    title: "SQL Bootcamp",
    description:
      "Learn Microsoft SQL Server to extract information from databases by writing SQL queries, joining tables, aggregating data, and filtering the results.",
    price: "$975",
    hours: "18 Hours",
  },
  {
    title: "Python for Data Science Bootcamp",
    description:
      "Learn the fundamentals of Python and object-oriented programming in this 5-day intensive course. Gain a solid understanding of Python for data science.",
    price: "$1,495",
    hours: "30 Hours",
  },
  {
    title: "Tableau Bootcamp",
    description:
      "Master Tableau in just two days. Learn to identify datasets to explore, analyze, filter, and structure your data. Create maps and dashboards.",
    price: "$499",
    hours: "12 Hours",
  },
];

const BusinessBootcampCard = ({ title, description, price, hours }) => {
  return (
    <div className="min-w-[300px] max-w-sm bg-white shadow-md rounded-md border border-gray-200 p-6 mr-6">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Price and Hours */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
          {price}
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
          {hours}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-3">
        <button className="flex items-center justify-center px-4 py-2 text-sm text-blue-600 border border-blue-400 rounded hover:bg-blue-50">
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Course Details
        </button>
        <button className="flex items-center justify-center px-4 py-2 text-sm text-blue-600 border border-blue-400 rounded hover:bg-blue-50">
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h11M9 21V3"
            />
          </svg>
          Download Syllabus
        </button>
      </div>
    </div>
  );
};

const DefaultCard = () => {
  return (
    <div className="flex overflow-x-auto p-6 bg-gray-100">
      {bootcamps.map((bootcamp, index) => (
        <BusinessBootcampCard
          key={index}
          title={bootcamp.title}
          description={bootcamp.description}
          price={bootcamp.price}
          hours={bootcamp.hours}
        />
      ))}
    </div>
  );
};

export default DefaultCard;
