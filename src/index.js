import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { v1Router } from './api/router';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

app.use('/api/v1', v1Router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})