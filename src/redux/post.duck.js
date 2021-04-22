const GET_SEARCH = "REDUX-OBS/SEARCH/GET";
const RESET_SEARCH = "REDUX-OBS/SEARCH/RESET";

export function getSearch() {
    return async (dispatch) => {
      //  const booking = await Api.get("Booking/");
        dispatch({
            type: GET_SEARCH,
          //  payload: //booking.data,
        });
    };
}

export function resetSearch() {
    return (dispatch) => {
        dispatch({
            type: RESET_SEARCH,
        });
    };
}

const initialState = {
    data: [],
};

const handlers = {
    [GET_SEARCH]: (state, { payload }) => ({
        ...state,
        data: [...state.data, ...payload],
    }),
    [RESET_SEARCH]: (state) => initialState,
    DEFAULT: (state) => state
};

export const searchReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};


export default searchReducer;