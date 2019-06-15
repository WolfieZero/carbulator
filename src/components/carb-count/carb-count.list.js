import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items, onRemoveItem }) => {
    const list = [];

    items.forEach((item, index) => {
        list.push(
            <li key={index}>
                {item} &nbsp; &nbsp;
                <span onClick={onRemoveItem.bind(this, index)}>X</span>
            </li>
        );
    });

    return (
        <ul>
            {list}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};

export default List;
