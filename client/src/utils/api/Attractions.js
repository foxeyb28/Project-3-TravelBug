const getAttractions = async (locationId) => {
  console.log(locationId)
  const attractionUrl = `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${locationId}&currency=USD&lang=en_US&lunit=km&sort=recommended`;

  const attractionOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const attractionResponse = await fetch(attractionUrl, attractionOptions);
    const attraction = await attractionResponse.json();
    console.log(attraction)
    return attraction
  } catch (error) {
    throw error;
  }
};

export default getAttractions;