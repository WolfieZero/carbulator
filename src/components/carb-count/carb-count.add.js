import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, ListInput } from 'framework7-react';

import actions from '../../actions';

const Add = ({ handleAddCarb }) => {
  const [carb, setCarb] = useState(0);

  const handleChange = event => {
    setCarb(parseInt(event.target.value, 10));
  };

  const handleAdd = event => {
    event.preventDefault();
    if (carb > 0) {
      handleAddCarb(carb);
    }
  };

  return (
    <>
      <List>
        <ListInput
          label="Grams of carbohydrates"
          type="number"
          pattern="\d*"
          onChange={handleChange}
        />
      </List>
      <Button fill large type="submit" onClick={handleAdd}>
        Add
      </Button>
    </>
  );
};

Add.propTypes = {
  handleAddCarb: PropTypes.func.isRequired,
};

const mapStateToProperties = () => ({
  // ...
});

const mapDispatchToProperties = {
  handleAddCarb: actions.carbs.addCarb,
};

export default connect(mapStateToProperties, mapDispatchToProperties)(Add);
