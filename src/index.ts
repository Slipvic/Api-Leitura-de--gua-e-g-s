import express from 'express';
import readingRoutes from './router/Routes';

const app = express();

// Adiciona middleware para configurar o Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' blob: data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
  );
  next();
});

app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de leituras');
});

// Usa as rotas de leitura
app.use('/api', readingRoutes);

// Tratamento de erro para rotas não encontradas
app.use((req, res) => {
  res.status(404).send('Rota não encontrada');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
