import { Request, Response } from 'express';

// Exemplo de dados mockados
const parques = [
  { id: 1, name: 'Parque Municipal', address: 'Centro', free: true },
  { id: 2, name: 'Parque das Mangabeiras', address: 'Mangabeiras', free: true },
  { id: 3, name: 'Praça do Papa', address: 'Mangabeiras', free: true }
];

export const getParques = (req: Request, res: Response) => {
  res.json(parques);
};
