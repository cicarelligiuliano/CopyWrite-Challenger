import api from '../../axios';

export const ADD_TEXT = 'ADD_TEXT';
export const RESET_ALL = 'RESET_ALL';

export const addText = (text) => async (dispatch) => {
    try {
        const { data } = await api.get(`/?text=${text}`);
        dispatch({ type: ADD_TEXT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const resetAll = () => async (dispatch) => {
    dispatch({
        type: RESET_ALL,
        payload: '',
    });
};
