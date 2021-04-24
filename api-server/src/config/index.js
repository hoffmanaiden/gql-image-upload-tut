import {config} from 'dotenv';

const {parsed} = config();

export const {
  PORT,
  MODE,
  IN_PROD = MODE !== 'prod',
  DB_USER,
  DB_PASS
} = parsed