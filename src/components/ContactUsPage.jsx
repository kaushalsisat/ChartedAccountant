import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-100 to-gray-300 text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <div className="p-8 text-center md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-lg md:text-xl mt-4">
            Get in touch with us for expert financial advice and services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-700 text-white p-3 rounded-lg hover:bg-cyan-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-700">
              Reach out to us through the following channels, or visit us at our office.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
              <p className="text-gray-600">123 Financial Lane, Suite 456, Accounting City, AC 78901</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">info@charteredaccountant.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
