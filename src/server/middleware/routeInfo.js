import ROUTE_INFO from '../routeInfo';

const routeInfo = (req, _, next) => {
    req.routeInfo = ROUTE_INFO[req.path];
    next();
};

export default routeInfo;
