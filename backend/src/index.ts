
import express from 'express';
import bodyParser from 'body-parser';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import ordersRouter from './routes/orders';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
