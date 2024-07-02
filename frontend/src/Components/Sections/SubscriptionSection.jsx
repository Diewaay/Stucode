/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const SubscriptionSection = ({ title, description, benefits, packages }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
        {title}
      </h2>
      <p className="mb-6 text-center md:text-left">{description}</p>
      <ul className="list-disc ml-5 mb-6 text-left">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row justify-around items-center">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white p-4 rounded-lg mb-4 md:mb-0 w-full md:w-1/3 mx-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">{pkg.name}</h3>
            <p className="line-through text-center">{pkg.originalPrice}</p>
            <p className="text-4xl font-bold mb-4 text-center">
              {pkg.discountedPrice}
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              <Link
                to={`/Subscription?name=${pkg.name}&price=${pkg.discountedPrice}`}
              >
                Pilih Paket
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionSection;
