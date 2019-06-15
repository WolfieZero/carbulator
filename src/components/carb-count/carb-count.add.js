import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Add = ({ onAdd }) => {
    const [carb, setCarb] = useState('');

    const handleChange = event => {
        event.persist();
        setCarb(parseInt(event.target.value, 10));
    };

    const handleAdd = event => {
        event.preventDefault();
        if (typeof carb === 'number') {
            onAdd(carb);
            setCarb('');
        }
    };

    return (
        <form onSubmit={handleAdd}>
            <input value={carb} onChange={handleChange} type="number" autoFocus />
            <button type="submit">Add</button>
        </form>
    );
};

Add.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default Add;
