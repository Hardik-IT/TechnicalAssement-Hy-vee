const fetchAnimalData = async (animalType) => {
    try {
      let apiUrl = '';
      if (animalType === 'cat') {
        apiUrl = 'https://catfact.ninja/fact';
      } else if (animalType === 'dog') {
        apiUrl = 'https://dog.ceo/api/breeds/image/random';
      }
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      return animalType === 'cat' ? data.fact : data.message;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch data');
    }
  };
  
  export default fetchAnimalData;
  