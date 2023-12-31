const fetch = require('node-fetch');

const searchLocation = 'Chicago';

const getLocationId = async () => {
  const locationSearchUrl = `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchLocation}&limit=30&offset=0&units=km&currency=USD&sort=relevance&lang=en_US`;

  const locationSearchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const locationResponse = await fetch(locationSearchUrl, locationSearchOptions);
    const locationResult = await locationResponse.json();

    if (locationResult.data && locationResult.data.length > 0) {
      return locationResult.data[0].result_object.location_id;
    } else {
      throw new Error('No data results found for the given location.');
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getLocationId;