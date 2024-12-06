import React from "react";
import CertificatesCards from "./CertificatesCards";

const BootcampCard = ({ title, description, price, hours }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {/* Price and Hours */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
          ${price}
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
          {hours} Hours
        </span>
      </div>
      {/* Buttons */}
      <div className="flex space-x-3">
        <button className="flex items-center justify-center px-4 py-2 text-sm text-blue-600 border border-blue-400 rounded hover:bg-blue-50">
          Course Details
        </button>
        <button className="flex items-center justify-center px-4 py-2 text-sm text-blue-600 border border-blue-400 rounded hover:bg-blue-50">
          Download Syllabus
        </button>
      </div>
    </div>
  );
};

const BusinessBootcamps = () => {
  const bootcamps = [
    {
      title: "Excel for Business Bootcamp",
      description:
        "Become an advanced Microsoft Excel user in just three days. This Excel Bootcamp includes 18 hours of hands-on training in formulas, functions, Pivot Tables, macros & more.",
      price: 549,
      hours: 18,
    },
    {
      title: "Python for Data Science Bootcamp",
      description:
        "Learn the fundamentals of Python and object-oriented programming in this 5-day intensive course. Gain a solid understanding of Python with a strong emphasis on libraries and frameworks for data science.",
      price: 1495,
      hours: 30,
    },
    {
      title: "SQL Bootcamp",
      description:
        "Learn Microsoft SQL Server to extract information from databases by writing SQL queries, joining tables, aggregating data, and filtering results.",
      price: 975,
      hours: 18,
    },
    {
      title: "Tableau Bootcamp",
      description:
        "Master Tableau in just two days. Learn to identify datasets, create visualizations, and build dashboards with interactive elements.",
      price: 499,
      hours: 12,
    },
    {
      title: "Excel for Business Bootcamp",
      description:
        "Become an advanced Microsoft Excel user in just three days. This Excel Bootcamp includes 18 hours of hands-on training in formulas, functions, Pivot Tables, macros & more.",
      price: 549,
      hours: 18,
    },
    {
      title: "Python for Data Science Bootcamp",
      description:
        "Learn the fundamentals of Python and object-oriented programming in this 5-day intensive course. Gain a solid understanding of Python with a strong emphasis on libraries and frameworks for data science.",
      price: 1495,
      hours: 30,
    },
    {
      title: "SQL Bootcamp",
      description:
        "Learn Microsoft SQL Server to extract information from databases by writing SQL queries, joining tables, aggregating data, and filtering results.",
      price: 975,
      hours: 18,
    },
    {
      title: "Tableau Bootcamp",
      description:
        "Master Tableau in just two days. Learn to identify datasets, create visualizations, and build dashboards with interactive elements.",
      price: 499,
      hours: 12,
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          Featured Data & Business Bootcamps
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {bootcamps.map((camp, index) => (
            <BootcampCard
              key={index}
              title={camp.title}
              description={camp.description}
              price={camp.price}
              hours={camp.hours}
            />
          ))}
        </div>
      </div>
      <div className="my-4">
        {/* Horizontal Line */}
        <hr className="border-gray-300" />
      </div>
      <CertificatesCards />
    </div>
  );
};

export default BusinessBootcamps;
