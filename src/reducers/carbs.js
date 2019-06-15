import ACTION_TYPES from '../config/action-types';

const carbList = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.CARB_ADD:
        case ACTION_TYPES.CARB_REMOVE:
            return {
                ...state,
                carbs: action.payload.carbs,
            };
        case ACTION_TYPES.CARB_TOTAL:
            return {
                ...state,
                total: action.payload.total,
            };

        default:
            return state;
    }
};

export default carbList;
