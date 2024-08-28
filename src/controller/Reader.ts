import { Request, Response } from 'express';
import { extrairValorDaImagem } from '../services/llmService'
import { Reading } from '../model/reading';

let readings: Reading[] = [];

export const createReading = async (req: Request, res: Response) => {
  const { type } = req.body;
  const imagePath = req.file?.path;

  if (!imagePath || !type) {
    return res.status(400).send('Tipo e imagem são obrigatórios');
  }

  try {
    const value = await extrairValorDaImagem(imagePath);

    const newReading: Reading = {
      id: readings.length + 1,
      type,
      value,
      date: new Date(),
    };

    readings.push(newReading);
    res.status(201).send(newReading);
  } catch (error) {
    res.status(500).send(error);
  }
};
