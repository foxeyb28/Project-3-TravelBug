const fetch = require('node-fetch');

const url = 'https://travel-advisor.p.rapidapi.com/attractions/list?location_id=%3CREQUIRED%3E&currency=USD&lang=en_US&lunit=km&sort=recommended';
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