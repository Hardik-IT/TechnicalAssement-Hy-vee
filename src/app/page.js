// pages/index.js
"use client";
import { useState } from 'react';
import AnimalSelector from './components/AnimalSelector';
import FactOrImageDisplay from './components/FactOrImageDisplay';
import fetchAnimalData from './services/api';

export default function Home() {
  const [animalType, setAnimalType] = useState('');
  const [factOrImage, setFactOrImage] = useState(null);

  const handleAnimalTypeChange = (e) => {
    setAnimalType(e.target.value);
    setFactOrImage(null); // Reset fact/image when animal type changes
  };

  const fetchFactOrImage = async () => {
    try {
      const data = await fetchAnimalData(animalType);
      setFactOrImage(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-purple-200">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Fetch a Cat Fact or a Dog Image</h1>
        <form className="flex items-center justify-center flex-col">
          <AnimalSelector value={animalType} onChange={handleAnimalTypeChange} />
          <button
            type="button"
            onClick={fetchFactOrImage}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            Fetch
          </button>
        </form>
        <FactOrImageDisplay animalType={animalType} factOrImage={factOrImage} />
      </div>
    </div>
  );
}
