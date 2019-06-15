import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'framework7-react';

import actions from '../../actions';

const CarbList = ({ items, handleRemoveCarb }) => {
    const list = [];

    items.forEach((item, index) => {
        list.push(
            <ListItem key={index} title={item + 'g'}>
                <span onClick={handleRemoveCarb.bind(this, index)}>X</span>
            </ListItem>
        );
    });

    return (
        <List>
            {list}
        </List>
    );
};

CarbList.propTypes = {
    items: PropTypes.array.isRequired,
    handleRemoveCarb: PropTypes.func.isRequired,
};

const mapStateToProperties = state => ({
    items: state.carbs.list,
});

const mapDispatchToProperties = {
    handleRemoveCarb: actions.carbs.removeCarb,
};

export default connect(
    mapStateToProperties,
    mapDispatchToProperties
)(CarbList);
