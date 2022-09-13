import React from 'react';
import PropTypes from 'prop-types';

const HTMLPage = ({ children, pageTitle, scriptName }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{pageTitle}</title>
        </head>
        <body>
            <div id="root">{children}</div>
            <script src={`${scriptName}.js`} async></script>
        </body>
    </html>
);

HTMLPage.propTypes = {
    children: PropTypes.node,
    pageTitle: PropTypes.string,
    scriptName: PropTypes.string,
};

export default HTMLPage;
