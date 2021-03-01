
import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import { connect } from './databases';

const app = express();

connect();

app.use(express.json());
app.use('/api/v1', router);

export { app };