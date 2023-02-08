import * as express from 'express';
import { getRootRoutes } from './app/routes/root-router';
import { getArticleRoutes } from './app/routes/article-routes';
import { urlencoded, json } from 'body-parser';
import { connect, connection } from 'mongoose';

const app = express();

// Configure bodyparser to handle post requests
app.use(urlencoded({ extended: true }));
app.use(json());

// Connect to Mongoose and set connection variable
connect('mongodb://localhost:27017', {
  dbName: 'test-api-db',
});
const db = connection;

app.use('/api', getRootRoutes());
app.use('/api/article', getArticleRoutes());

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
