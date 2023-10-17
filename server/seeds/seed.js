//seeds 10/13/23 Mack are we allowed to use axios?
//const axios = require('axios');
const { YourDatabaseModel } = require('../models'); 
const { API_KEY } = process.env; // need to be replaced
const fetch = require('node-fetch');

// async function seedTripAdvisorData() {
//   try {
//     const response = await axios.get('https://rapidapi.com/DataCrawler/api/tripadvisor16/', {
//       headers: {
//         'X-RapidAPI-Key': API_KEY,
//       },
//     });
//     const data = response.data; 

// const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=london';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
//     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//     // Insert data into the database
//     await YourDatabaseModel.insertMany(data);

//     console.log('TripAdvisor data seeded successfully.');
//   } catch (error) {
//     console.error('Error seeding TripAdvisor data:', error);
//   }
// }

// seedTripAdvisorData();
