const fetch = require('node-fetch');

const url = 'https://travel-advisor.p.rapidapi.com/locations/search?query=%3CREQUIRED%3E&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}