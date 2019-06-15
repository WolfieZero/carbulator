import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Total = ({ value }) => {
    return (
        <h1>{ value }g</h1>
    );
};

Total.defaultProps = {
    value: 0,
};

Total.propTypes = {
    value: PropTypes.number,
};

const mapStateToProperties = state => ({
    value: state.carbs.total,
});

export default connect(mapStateToProperties)(Total);
