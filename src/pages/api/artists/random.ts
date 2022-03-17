// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  layers: string[];
};

const bodyParts = {
  legs: [1, 2, 3],
  'left-arms': [1, 2, 3],
  chest: [1, 2, 3],
  'right-arms': [1, 2, 3],
  heads: [2, 3],
  eyes: [2, 3],
  mouths: [`none`, 1],
  hairs: [`none`, 2, 3],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const layers = Object.entries(bodyParts)
    .map(([key, values]) => [key, values[~~(Math.random() * values.length)]])
    .filter(([, value]) => value !== `none`)
    .map(([key, value]) => `/images/demo/body-parts/${key}/${value}.png`);

  res.status(200).json({
    layers,
  });
}
