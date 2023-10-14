//seeds 10/13/23 Mack are we allowed to use axios?
//const axios = require('axios');
const { YourDatabaseModel } = require('../models'); 
const { API_KEY } = process.env; // need to be replaced

async function seedTripAdvisorData() {
  try {
    const response = await axios.get('https://rapidapi.com/DataCrawler/api/tripadvisor16/', {
      headers: {
        'X-RapidAPI-Key': API_KEY,
      },
    });
    const data = response.data; 

    // Insert data into the database
    await YourDatabaseModel.insertMany(data);

    console.log('TripAdvisor data seeded successfully.');
  } catch (error) {
    console.error('Error seeding TripAdvisor data:', error);
  }
}

seedTripAdvisorData();
