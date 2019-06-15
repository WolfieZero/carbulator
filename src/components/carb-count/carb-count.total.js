import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ value }) => {
    return (
        <h1>{ value }</h1>
    );
};

Total.defaultProps = {
    value: 0,
};

Total.propTypes = {
    value: PropTypes.number,
};

export default Total;
