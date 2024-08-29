import 'dotenv/config'
import express, { Request, Express, Response } from 'express';
import { writeRequestCodeData } from './services/firebase/db-realtime/request-code';
// middleware
import { json } from 'body-parser';
import { errorHandler } from './middleware/error-handler';
import { useCors } from './middleware/cors';

const app: Express = express();
app.use(json());
app.use(useCors);
app.use(errorHandler);

app.post('/request-code', async (req: any, res:any) => {
  await writeRequestCodeData({
    email: req.body.email
  });
  await res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
