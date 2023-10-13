const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const Port = process.env.Port || 3001;
const app = express();
const server = new ApolloServer({
   typeDefs,
   resolvers,
   
});

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

if (process.env.Node_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}