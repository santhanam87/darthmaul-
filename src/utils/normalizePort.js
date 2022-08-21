const normalizePort = (portNumber) => {
	const port = parseInt(portNumber, 10);
	if (Number.isNaN(port)) {
		return false;
	}
	return port;
};
export default normalizePort;
