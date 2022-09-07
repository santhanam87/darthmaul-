import express from 'express';
import cookieParser from 'cookie-parser';
import httpError from 'http-errors';
import path from 'path';

import { devLogger } from './services/logger';
import router from './routes';

const apiApp = express();

// Adding middleware
apiApp.use(express.json());
apiApp.use(express.urlencoded({ extended: false }));
apiApp.use(cookieParser());
// Static routes
apiApp.use(express.static(path.join(__dirname, 'public')));

// Adding routes
apiApp.use('/', router);

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
