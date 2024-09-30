import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <h2 className="text-lg font-bold">FilixFlop </h2>
            <p className="text-sm">© 2024 All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Movies
            </a>
            <a href="#" className="hover:text-gray-400">
              Tv Shows
            </a>
            <a href="#" className="hover:text-gray-400">
              People
            </a>
            <a href="#" className="hover:text-gray-400">
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
