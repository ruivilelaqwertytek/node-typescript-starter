import cors, { CorsOptions } from 'cors';

type callbackType = (err: Error | null, allow?: boolean) => void;
type originType = string | undefined;

const whitelist = ['http://qwertytek.com'];

export const corsOptions: CorsOptions = {
  origin: (origin: originType, callback: callbackType) => {
    if (origin && whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

export const useCors = cors(corsOptions);