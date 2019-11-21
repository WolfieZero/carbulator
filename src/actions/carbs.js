import ACTION_TYPES from '../config/action-types';

const calulateTotal = carbs => {
  if (carbs.length === 0) {
    return 0;
  }

  return carbs.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

export default {
  addCarb: carb => (dispatch, getState) => {
    const list = getState().carbs.list.slice(0);
    list.push(parseInt(carb, 10));

    dispatch({
      type: ACTION_TYPES.CARB_ADD,
      payload: {
        list,
      },
    });

    const total = calulateTotal(list);

    dispatch({
      type: ACTION_TYPES.CARB_TOTAL,
      payload: {
        total,
      },
    });
  },

  removeCarb: index => (dispatch, getState) => {
    const list = getState().carbs.list.slice(0);
    list.splice(index, 1);

    dispatch({
      type: ACTION_TYPES.CARB_REMOVE,
      payload: {
        list,
      },
    });

    const total = calulateTotal(list);

    dispatch({
      type: ACTION_TYPES.CARB_TOTAL,
      payload: {
        total,
      },
    });
  },
};
