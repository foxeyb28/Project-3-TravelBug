const fetch = require('node-fetch');

const getRestaurants = async (locationId) => {
  const restaurantUrl = `https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=${locationId}&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US`;

  const restaurantOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const restaurantResponse = await fetch(restaurantUrl, restaurantOptions);
    return await restaurantResponse.text();
  } catch (error) {
    throw error;
  }
};

module.exports = getRestaurants;