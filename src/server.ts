import express, { Request, Express, Response } from 'express';
import { json } from 'body-parser';

// Import your event listeners
// import './listeners/UserListeners';
// import './listeners/PostListeners';

// Import your routers
// import { userRouter } from './routes/userRoutes';
// import { postRouter } from './routes/postRoutes';

const app: Express = express();
app.use(json());

// Set up your routes
// app.use('/users', userRouter);
// app.use('/posts', postRouter);

// Default error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err);
  res.status(500).send({ message: err.message });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).send({ message: 'Not Found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
