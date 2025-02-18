import React from "react";
import TechStack from '../markdown/techstack.mdx'
import Papa from 'papaparse';

const TS = [
    {
      "Languages": "Java",
      "Frontend": "Angular",
      "Backend": "Spring Framework",
      "AWS": "Elastic Beanstalk",
      "Containerization": "Docker",
      "Automation": "Jenkins",
      "Version Control": "Github",
      "Testing": "Cypress",
      "OS": "Linux",
      "IDE": "IntelliJ"
    },
    {
      "Languages": "JavaScript",
      "Frontend": "React",
      "Backend": "MySQL",
      "AWS": "EC2",
      "Containerization": "Kubernetes",
      "Automation": "",
      "Version Control": "Teamforge",
      "Testing": "JUnit",
      "OS": "Windows",
      "IDE": "VSCode"
    },
    {
      "Languages": "TypeScript",
      "Frontend": "NextJS",
      "Backend": "Oracle",
      "AWS": "RDS",
      "Containerization": "",
      "Automation": "",
      "Version Control": "",
      "Testing": "Postman",
      "OS": "",
      "IDE": ""
    },
    {
      "Languages": "HTML/Markdown",
      "Frontend": "Vercel",
      "Backend": "MongoDB",
      "AWS": "S3",
      "Containerization": "",
      "Automation": "",
      "Version Control": "",
      "Testing": "",
      "OS": "",
      "IDE": ""
    },
    {
      "Languages": "Tailwind/CSS",
      "Frontend": "Retool",
      "Backend": "JDBC",
      "AWS": "",
      "Containerization": "",
      "Automation": "",
      "Version Control": "",
      "Testing": "",
      "OS": "",
      "IDE": ""
    },
    {
      "Languages": "Python",
      "Frontend": "",
      "Backend": "Hibernate",
      "AWS": "",
      "Containerization": "",
      "Automation": "",
      "Version Control": "",
      "Testing": "",
      "OS": "",
      "IDE": ""
    },
    {
      "Languages": "SQL",
      "Frontend": "",
      "Backend": "Microservices",
      "AWS": "",
      "Containerization": "",
      "Automation": "",
      "Version Control": "",
      "Testing": "",
      "OS": "",
      "IDE": ""
    },
    {
      "Languages": "Linux",
      "Frontend": "",
      "Backend": "",
      "AWS": "",
      "Containerization": "",
      "Automation": "",
      "Version Control": "",
      "Testing": "",
      "OS": "",
      "IDE": ""
    }
  ];
  
  const itemsArray = [
    { "item": "Java" },
    { "item": "Angular" },
    { "item": "Spring Framework" },
    { "item": "Elastic Beanstalk" },
    { "item": "Docker" },
    { "item": "Jenkins" },
    { "item": "Github" },
    { "item": "Cypress" },
    { "item": "Linux" },
    { "item": "IntelliJ" },
    { "item": "JavaScript" },
    { "item": "React" },
    { "item": "MySQL" },
    { "item": "EC2" },
    { "item": "Kubernetes" },
    { "item": "Teamforge" },
    { "item": "JUnit" },
    { "item": "Windows" },
    { "item": "VSCode" },
    { "item": "TypeScript" },
    { "item": "NextJS" },
    { "item": "Oracle" },
    { "item": "RDS" },
    { "item": "Postman" },
    { "item": "HTML/Markdown" },
    { "item": "Vercel" },
    { "item": "MongoDB" },
    { "item": "S3" },
    { "item": "Tailwind/CSS" },
    { "item": "Retool" },
    { "item": "JDBC" },
    { "item": "Python" },
    { "item": "Hibernate" },
    { "item": "SQL" },
    { "item": "Microservices" },
    { "item": "Linux" }
  ];
  
  console.log(itemsArray);
  
  

export default function Page() {
    
    
    return (
        <>
        <div className="w-1/2 justify-self-center text-balance font-serif antialiased opacity-80">
        {/* <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {itemsArray.map((items) => (
        <li key={items.item} className="relative">
          <div className="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              alt=""
              src={items.item}
              className="pointer-events-none aspect-10/7 object-cover group-hover:opacity-75"
            />
            <button type="button" className="absolute inset-0 focus:outline-hidden">
              <span className="sr-only">View details for {items.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{items.item}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{items.item}</p>
        </li>
      ))}
    </ul> */}
    <TechStack/>
        </div>
        </>
    )
}