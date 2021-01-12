import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { hour: '10:00', available: true },
    { hour: '10:30', available: true },
    { hour: '11:00', available: true },
    { hour: '11:30', available: true },
    { hour: '12:00', available: true },
    { hour: '12:30', available: true },
    { hour: '14:00', available: false },
    { hour: '14:30', available: false },
    { hour: '15:00', available: false },
  ]);
}
