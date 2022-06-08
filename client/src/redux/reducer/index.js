import { ADD_TEXT, RESET_ALL } from '../actions';

const initialState = {
    texts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                texts: [action.payload, ...state.texts],
            };
        case RESET_ALL:
            return {
                ...state,
                texts: [],
            };
        default:
            return state;
    }
};

export default rootReducer;
