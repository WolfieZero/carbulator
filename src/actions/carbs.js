import ACTION_TYPES from '../config/action-types';

const calulateTotal = carbs => {
    if (carbs.length === 0) {
        return 0;
    }

    return carbs.reduce((accumulator, currentValue) =>
        accumulator + currentValue
    );
};

export default {
    addCarb: carb => (dispatch, getState) => {
        const carbs = getState().carbs.list;
        carbs.push(parseInt(carb, 10));

        dispatch({
            type: ACTION_TYPES.CARB_ADD,
            payload: {
                carbs,
            },
        });

        const total = calulateTotal(carbs);

        dispatch({
            type: ACTION_TYPES.CARB_TOTAL,
            payload: {
                total,
            },
        });
    },

    removeCarb: index => (dispatch, getState) => {
        const carbs = getState().carbs.list;
        carbs.splice(index, 1);

        dispatch({
            type: ACTION_TYPES.CARB_REMOVE,
            payload: {
                carbs,
            },
        });

        const total = calulateTotal(carbs);

        dispatch({
            type: ACTION_TYPES.CARB_TOTAL,
            payload: {
                total,
            },
        });
    },
};
