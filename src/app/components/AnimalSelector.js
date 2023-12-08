// components/AnimalSelector.js
import React from 'react';

const AnimalSelector = ({ value, onChange }) => {
  return (
    <label className="block mt-4 text-lg text-gray-800 text-center">
      <span className="text-3xl block font-bold mb-2">🐾 Choose an Animal</span>
      <select
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-white mx-auto sm:w-2/3 lg:w-1/2"
      >
        <option value="">Select</option>
        <option value="cat">🐱 Cat</option>
        <option value="dog">🐶 Dog</option>
      </select>
    </label>
  );
};

export default AnimalSelector;
