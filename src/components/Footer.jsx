import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Chartered Accountants</h2>
            <p className="text-gray-400">
              We provide expert financial solutions and accounting services to individuals and businesses worldwide.
            </p>
          </div>   

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@ca-services.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Finance Lane, Business City, USA</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Chartered Accountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
