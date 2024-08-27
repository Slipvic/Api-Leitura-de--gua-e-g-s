import express from 'express';
import readingRoutes from './router/Routes';

const app = express();
app.use(express.json());
app.use('/api', readingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
