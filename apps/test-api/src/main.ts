import * as express from 'express';
import { getUserRoutes } from './app/routes/user-routes';

const app = express();

app.use('/api/user', getUserRoutes());

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
