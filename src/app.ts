import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductsRoutes } from './app/modules/products/products.routes';
import { OrderRoutes } from './app/modules/orders/orders.routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/', ProductsRoutes);
app.use('/api/', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// console.log(process.cwd());

export default app;
