import express, { Request, Response } from 'express';
import cors from 'cors';
import baresRoutes from './src/routes/baresRoutes';
import parquesRoutes from './src/routes/parquesRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/bares', baresRoutes);
app.use('/api/parques', parquesRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'API do Uai, bora? está rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});