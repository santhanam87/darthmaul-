import React from 'react';
import AppName from '../components/name/name';

function UserPage() {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>User Page</title>
				<script src="pageScript.js" async></script>
			</head>
			<body>
				<div id="root">
					<AppName />
				</div>
			</body>
		</html>
	);
}

export default UserPage;
