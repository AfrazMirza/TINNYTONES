import React from 'react';
import { Link } from 'react-router-dom';
import largeImage from './../assets/fitSection/bigmenimge.jpg';
import all_products from '../assets/all_product';
import image1 from './../assets/34.jpg';
import image2 from './../assets/35.jpg';
import image3 from './../assets/36.jpg';
import image4 from './../assets/37.jpg';

function GridSection() {
  
  const topFourItems = [
    {
      name:"Afraz Mirza", 
      image:image1,
    },
    {
      name:"Sheikh Mohamm.Lukman", 
      image:image2,
    },
    {
      name:"Farzana Akhtar", 
      image:image4,
    },
    {
      name:"Zahid Beg", 
      image:image3,
    },
  ];
  console.log(topFourItems);
  return (
    <div className="max-w-7xl mx-auto mt-14 px-8 py-12">
    <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
      About Artists
    </h1>
    {/* grid section */}
    <div className="grid gap-6 grid-cols-4 grid-rows-2">
      {topFourItems.map((product, index) => (
        <div key={index} className="col-span-2 row-span-2 relative overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-all transform ease-in-out delay-300"
            src={product.image}
            alt={product.name}
          />
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-lg p-2">
            {product.name}
          </p>
          <button className="absolute inset-0 text-white text-lg w-full h-full opacity-0 hover:opacity-100 transition-opacity ease-linear delay-200 bg-black bg-opacity-50">
            View Details
          </button>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
        <Link to="/artists">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            View More
          </button>
        </Link>
      </div>
  </div>
  );
}

export default GridSection;
