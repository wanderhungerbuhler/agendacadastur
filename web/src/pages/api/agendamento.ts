import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from 'next/router';
import getThumbnailTemplate from "./_lib/thumbnailTemplate";
import { getScreenshot } from './_lib/chromium';
import Mail from '@/mail/mail';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

const isDev = !process.env.AWS_REGION;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, cadastur, date, hour } = req.query;

  const parsedDate = parseISO(String(date));

  const day = format(parsedDate, 'dd', { locale: pt });
  const month = format(parsedDate, 'MMM', { locale: pt });
  const year = format(parsedDate, 'yyyy', { locale: pt });

  if(name && email && cadastur && day && month && year && hour){
    try {
      const html = getThumbnailTemplate({
        name,
        email,
        cadastur,
        day,
        month,
        year,
        hour
      });
  
      const file = await getScreenshot(html, isDev);
      
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000');
  
      // Mail({
      //   name,
      //   email,
      //   date,
      //   hour
      // });

      // const router = useRouter();
      // router.push('/', '/', { shallow: true });

      return res.end(file);

      
    } catch(err) {
      console.log(err);
  
      res.status(500).send('Internal server error');
    }
  } else {
    console.log('sdasddsf');
  }
  
  
}