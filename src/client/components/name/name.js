import React from 'react';
import PropTypes from 'prop-types';

const AppName = ({ inputName }) => <p>{inputName}</p>;

AppName.propTypes = {
	inputName: PropTypes.string,
};

export default AppName;
