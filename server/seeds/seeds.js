const db = require('../config/connection');
const { User, Trips } = require('../models');
db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Trips.deleteMany({});
    const users = await User.create([
      {
        username: 'user1',
        email: 'user1@example.com', 
        password: 'String',
        savedTrips: [],
      },
      // {
      //   username: 'user2',
      //   email: 'user2@example.com',
      //   password: 'String2',
      //   savedTrips: [],
      // },
    ]);
    const trips = await Trips.insertMany([
      {
        tripId: '1',
        title: 'Trip 1',
        description: 'Description for Trip 1',
      },
      {
        tripId: '2',
        title: 'Trip 2',
        description: 'Description for Trip 2',
      },
    ]);
    console.log('Data seeded successfully.');
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
});
