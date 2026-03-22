import { Request, Response } from 'express';

// Exemplo de dados mockados
const bares = [
  { id: 1, name: 'Bar do Zezé', address: 'Rua A, 123', price: '$$' },
  { id: 2, name: 'Boteco da Esquina', address: 'Av B, 456', price: '$' },
  { id: 3, name: 'Cervejaria Artesanal', address: 'Praça Central, 789', price: '$$$' }
];

export const getBares = (req: Request, res: Response) => {
  res.json(bares);
};
