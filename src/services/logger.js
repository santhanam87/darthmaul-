import debug from 'debug';

const devLogger = debug('Dev');
const prodLogger = debug('prod');

export { devLogger, prodLogger };
