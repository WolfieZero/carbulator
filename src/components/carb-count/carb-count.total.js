import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Value = styled.div`
  font-size: 1.5em;
  width: 100%;
  text-align: center;
`;

const Total = ({ value }) => {
  return <Value>{value}g</Value>;
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
