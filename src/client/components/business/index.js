import React from 'react';
import PropTypes from 'prop-types';

const BusinessItem = ({ name }) => <p>Business: {name}</p>;
BusinessItem.propTypes = {
    name: PropTypes.string,
};

export default BusinessItem;
