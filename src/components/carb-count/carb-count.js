import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Add from './carb-count.add';
import actions from '../../actions';
import List from './carb-count.list';
import Total from './carb-count.total';

const CarbList = ({ items, handleAddCarb, handleRemoveCarb, total }) => {
    return (
        <>
            <Add onAdd={handleAddCarb} />
            <Total value={total} />
            <List items={items} onRemoveItem={handleRemoveCarb} />
        </>
    );
};

CarbList.propTypes = {
    items: PropTypes.array.isRequired,
    handleAddCarb: PropTypes.func.isRequired,
    handleRemoveCarb: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
};

const mapStateToProperties = state => ({
    items: state.carbs.list,
    total: state.carbs.total,
});

const mapDispatchToProperties = {
    handleAddCarb: actions.carbs.addCarb,
    handleRemoveCarb: actions.carbs.removeCarb,
};

export default connect(
    mapStateToProperties,
    mapDispatchToProperties
)(CarbList);
