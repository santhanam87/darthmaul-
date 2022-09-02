import React from 'react';
import PropTypes from 'prop-types';

const HTMLPage = ({ children, pageTitle }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{pageTitle}</title>
            <script src="pageScript.js" async></script>
        </head>
        <body>
            <div id="root">{children}</div>
        </body>
    </html>
);

HTMLPage.propTypes = {
    children: PropTypes.node,
    pageTitle: PropTypes.string,
};

export default HTMLPage;
