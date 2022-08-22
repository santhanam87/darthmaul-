import React from 'react';
import PropTypes from 'prop-types';
import AppName from '../client/components/name/name';

function App({ inputName }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Document</title>
				<script src="main.js" async></script>
			</head>
			<body>
				<div id="root">
					<AppName inputName={inputName} />
				</div>
			</body>
		</html>
	);
}

App.propTypes = {
	inputName: PropTypes.string,
};

export default App;
