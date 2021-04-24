
import {success, error} from 'consola'
import {ApolloServer, gql} from 'apollo-server-express'
import express from 'express'
import {PORT, IN_PROD, DB_PASS, DB_USER} from './config'
import mongoose from 'mongoose';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';


const app = express();

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vkt8n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IN_PROD, // set to false in production
  context: {}
})

const startApp = () => {
  db.on('error', console.error.bind(console.error, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB connected!')
    server.applyMiddleware({app})
    app.listen(PORT, () => {
      success({
        badge: true,
        message: `Server started on port ${PORT}`, 
      })
    })
  })
}

startApp();