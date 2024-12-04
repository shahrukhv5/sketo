import React from "react";
import Card from "./Card";
import { SiMicrosoftexcel } from "react-icons/si";


const CardsSection = () => {
  const cards = [
    {
      title: "Microsoft Excel",
      description:
        "Master Microsoft Excel, the most crucial tool used by business professionals today. Learn functions, formulas, VLOOKUP, Pivot Tables, macros, and VBA programming.",
      icon: "📊",
    },
    {
      title: "Python",
      description:
        "Master programming principles, data science using Jupyter, and automation workflows in Python, one of the most powerful and versatile programming languages.",
      icon: "🐍",
    },
    {
      title: "Data Analytics",
      description:
        "Analyze, summarize, and visualize data with Excel, SQL, Tableau, and Python. Master the tools you need to become a data analyst or data scientist.",
      icon: "📈",
    },
    {
      title: "Microsoft Excel",
      description:
        "Master Microsoft Excel, the most crucial tool used by business professionals today. Learn functions, formulas, VLOOKUP, Pivot Tables, macros, and VBA programming.",
      icon: "📊",
    },
    {
      title: "Python",
      description:
        "Master programming principles, data science using Jupyter, and automation workflows in Python, one of the most powerful and versatile programming languages.",
      icon: "🐍",
    },
    {
      title: "Data Analytics",
      description:
        "Analyze, summarize, and visualize data with Excel, SQL, Tableau, and Python. Master the tools you need to become a data analyst or data scientist.",
      icon: "📈",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-900">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
};

export default CardsSection;
