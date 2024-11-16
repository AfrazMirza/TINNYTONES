import React from 'react';
import allProducts from '../assets/all_product';

function ArtistsPage() {
  return (
    <div className="max-w-7xl mx-auto mt-14 px-8 py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        All Artists
      </h1>
      <div className="grid gap-6 grid-cols-4">
        {allProducts.map((artist, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={artist.image}
              alt={artist.name}
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-lg p-2">
              {artist.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistsPage;

