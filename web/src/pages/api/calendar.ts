import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { day: 1, available: false },
    { day: 2, available: false },
    { day: 3, available: false },
    { day: 4, available: false },
    { day: 5, available: false },
    { day: 6, available: false },
    { day: 7, available: false },
    { day: 8, available: false },
    { day: 9, available: false },
    { day: 10, available: false },
    { day: 11, available: true },
    { day: 12, available: true },
    { day: 13, available: true },
    { day: 14, available: true },
    { day: 15, available: true },
    { day: 16, available: true },
    { day: 17, available: true },
    { day: 18, available: true },
    { day: 19, available: true },
    { day: 20, available: true },
    { day: 21, available: true },
    { day: 21, available: true },
    { day: 22, available: true },
    { day: 23, available: true },
    { day: 24, available: true },
    { day: 25, available: true },
    { day: 26, available: true },
    { day: 27, available: true },
    { day: 28, available: true },
    { day: 29, available: true },
    { day: 30, available: true },
    { day: 31, available: true },
  ]);
}
