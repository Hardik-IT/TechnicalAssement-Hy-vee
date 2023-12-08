// components/FactOrImageDisplay.js
import React from 'react';

const FactOrImageDisplay = ({ animalType, factOrImage }) => {
  return (
    <div className="result mt-6 flex justify-center">
      {factOrImage && (
        animalType === 'cat' ? (
          <div className="text-center">
            <p className="text-lg text-gray-800">{factOrImage}</p>
            <span className="text-sm text-gray-600">Meow 🐱</span>
          </div>
        ) : (
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={factOrImage} alt="Random Dog" className="max-w-full h-auto" />
            <span className="block text-sm text-gray-600 mt-2 text-center">Woof 🐶</span>
          </div>
        )
      )}
    </div>
  );
};

export default FactOrImageDisplay;
