import dotEnv from 'dotenv';
import createServer from './server';

dotEnv.config();
createServer();
