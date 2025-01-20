import React from "react";

const accountants = [
  {
    id: 1,
    name: "Michael Jackson",
    intro: "Expertise in accounting and finance, specializing in financial statements and auditing.",
    rating: 4.8,
    reviewCount: 89,
    price: "€4,370",
     
  },
  {
    id: 2,
    name: "Lucy Brown",
    intro: "Dedicated accountant with expertise in taxation and corporate finance.",
    rating: 4.5,
    reviewCount: 75,
    price: "€3,900",
     
  },
  {
    "id": 3,
    "name": "Robert Smith",
    "intro": "Experienced in overseeing financial management of medium to large enterprises.",
    "rating": 4.6,
    "reviewCount": 65,
    "taskComplexity": "Advanced financial tasks",
    "price": "€4,500",
  },
  {
    "id": 4,
    "name": "Anita Patel",
    "intro": "Passionate about helping startups navigate the complexities of financial compliance.",
    "rating": 4.9,
    "reviewCount": 95,
    "taskComplexity": "Basic to intermediate tasks",
    "price": "€3,900",
  },
  {
    "id": 5,
    "name": "Johnathan Lee",
    "intro": "Expert in streamlining business operations with financial acumen.",
    "rating": 4.5,
    "reviewCount": 72,
    "taskComplexity": "Intermediate tasks",
    "price": "€4,200",
  },
  {
    "id": 6,
    "name": "Sophia Fernandez",
    "intro": "Champion in guiding SMEs through their financial journeys with transparency and integrity.",
    "rating": 4.8,
    "reviewCount": 88,
    "taskComplexity": "Basic to advanced tasks",
    "price": "€4,250",
  },
  {
    "id": 7,
    "name": "William O'Connell",
    "intro": "Master of tax strategy and international finance regulations.",
    "rating": 4.6,
    "reviewCount": 78,
    "taskComplexity": "Advanced tasks",
    "price": "€5,000",
   },
   {
    "id": 8,
    "name": "Nina Johansson",
    "intro": "Specializes in financial forensics and fraud examination.",
    "rating": 4.9,
    "reviewCount": 92,
    "taskComplexity": "Advanced forensic tasks",
    "price": "€5,150",
   },
   {
    "id": 9,
    "name": "Oliver Bernard",
    "intro": "Dedicated to empowering non-profits with financial strategies and sustainability.",
    "rating": 4.7,
    "reviewCount": 85,
    "taskComplexity": "Intermediate to advanced tasks",
    "price": "€4,800",
    },
    {
    "id": 10,
    "name": "Isabella Martinez",
    "intro": "Expert in mergers, acquisitions, and corporate restructuring with a decade of experience.",
    "rating": 4.8,
    "reviewCount": 90,
    "taskComplexity": "Complex corporate tasks",
    "price": "€6,000",
     }
  // ... add the rest of the accountants here
];

const AccountantsList = () => {
  return (
    <div className="min-h-screen">
    <div className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="p-8 text-center md:p-16 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold">Our Charted Accountant List</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accountants.map((accountant) => (
          <div
            key={accountant.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{accountant.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{accountant.intro}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-green-600 font-semibold">Rating: {accountant.rating}</span>
                <span className="text-gray-500 text-sm">{accountant.reviewCount} reviews</span>
              </div>
              <p className="text-blue-600 font-bold mt-4">{accountant.price}</p>
              <p className="text-gray-500 text-sm">{accountant.deliveryTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountantsList;
