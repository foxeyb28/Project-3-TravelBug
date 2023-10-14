const { AuthenticationError } = require('apollo-server-express');
const { User, Trips } = require('../models');
const { signToken } = require('../utils/auth');
const { getTripAdvisorData } = require('./tripAdvisorApi');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    tripAdvisorData: async (parent, args, context) => {
      const data = await getTripAdvisorData();
      return data;
    },
  },
t user = await User.findOne({ email });

  Mutation: {
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });


      if (!user) {
          throw new AuthenticationError('No user found with this e-mail address');
      }
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
          throw new AuthenticationError('Incorrect Password!');
      }
      const token = signToken(user);
      return { token, user };
  },

  addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
  },

  saveTrip: async (parent, { tripData }, context) => {
      if (context.user) { 
          const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: {savedTrips: input }},
              { new: true, runValidators: true }
          );
          return updatedUser;
      } throw new AuthenticationError('You need to be logged in!');
  },

      removeTrip: async (parent, {tripId }, context) =>{
          if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $pull: {savedTrips: { tripId } } },
                  { new: true },
              );
              return updatedUser;
          }
          throw new AuthenticationError('You need to be logged in!');
      },
  };



module.exports = resolvers;