import React from 'react';
import PropTypes from 'prop-types';

const App = ({ inputName }) => <p>gettext Different content - {inputName}</p>;
export default App;

App.propTypes = {
	inputName: PropTypes.string,
};
