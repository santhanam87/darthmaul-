import express from 'express';
import cookieParser from 'cookie-parser';
import httpError from 'http-errors';
import { devLogger } from './services';
import usersRouter from './routes/users';

const apiApp = express();

// Adding middleware
apiApp.use(express.json());
apiApp.use(express.urlencoded({ extended: false }));
apiApp.use(cookieParser());

// Adding routes
apiApp.use('/users', usersRouter);
apiApp.use('/', (req, res) => {
	res.send({});
});

// Error Handling
apiApp.use((req, __, next) => {
	// 404 Not found error message.
	devLogger(httpError(404));
	next(httpError(404));
});

apiApp.use((err, _, res) => {
	// Handling other errors.
	res.status(err.status || 500);
	res.json(err);
});

export default apiApp;
