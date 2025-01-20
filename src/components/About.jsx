import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-100 to-gray-300 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="p-8 text-center md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold">Chartered Accountant</h1>
          <p className="text-lg md:text-xl mt-4">
            Expertise in Financial Solutions, Taxation, and Business Strategy
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="p-6 md:p-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto">
          With over a decade of experience, we provide comprehensive accounting services tailored to your needs.
          Our expertise spans financial planning, auditing, corporate finance, and more. We are committed to delivering 
          personalized solutions to help you achieve your financial goals.
        </p>
      </div>

      {/* Services Section */}
      <div className="p-6 md:p-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Financial Accounting",
            "Tax Planning",
            "Auditing",
            "Corporate Finance",
            "Advisory Services",
            "Bookkeeping",
          ].map((service, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-600 mt-2">
                Comprehensive and professional {service.toLowerCase()} tailored for your business.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="p-6 md:p-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Our Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Years of Experience", value: "10+" },
            { label: "Clients Served", value: "500+" },
            { label: "Awards Won", value: "15+" },
            { label: "Projects Completed", value: "300+" },
          ].map((highlight, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 shadow-lg rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold text-blue-900">{highlight.value}</h3>
              <p className="text-gray-600">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="p-6 md:p-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "John Doe",
              review:
                "The team has been instrumental in managing our finances and ensuring compliance with all regulations.",
            },
            {
              name: "Alice Smith",
              review: "Their expertise and personalized approach are truly exceptional.",
            },
            {
              name: "Raj Mehta",
              review: "I highly recommend their services to any business looking for professional accountants.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
              <h3 className="text-lg font-semibold mt-4 text-blue-900">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="p-6 md:p-12 bg-gradient-to-r from-cyan-700 to-blue-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Work Together?</h2>
        <p className="text-center max-w-2xl mx-auto mb-6">
          Contact us today to discuss how we can help with your accounting and financial needs.
        </p>
        <div className="text-center">
          <Link to="/" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

