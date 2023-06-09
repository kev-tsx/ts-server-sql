import express from 'express';
import { router } from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3010, () => {
  console.log('Server is running on port 3010');
});
