import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, ListInput } from 'framework7-react';

import actions from '../../actions';

const Add = ({ handleAddCarb }) => {
  const [carbPer100, setCarbPer100] = useState(0);
  const [carbServed, setCarbServed] = useState(0);

  const handleChangePer100 = event => {
    setCarbPer100(parseInt(event.target.value, 10));
  };

  const handleChangeServed = event => {
    setCarbServed(parseInt(event.target.value, 10));
  };

  const handleAdd = event => {
    event.preventDefault();
    if (carbPer100 > 0 && carbServed > 0) {
      handleAddCarb((carbPer100 / 100) * carbServed);
    }
  };

  return (
    <>
      <List>
        <ListInput
          label="Carbs per 100g"
          type="number"
          pattern="\d*"
          onChange={handleChangePer100}
        />
        <ListInput
          label="Actual grams served"
          type="number"
          pattern="\d*"
          onChange={handleChangeServed}
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
