// import { createSlice } from 'redux-starter-kit';

// const filtersSlice = createSlice({
//   slice: 'filters',
//   initialState: { labels: '', showCompleted: false },
//   reducers: {
//     setLabels(state, action) { return { ...state, labels: action.payload }; },
//     setShowCompleted(state, action) { return { ...state, showCompleted: action.payload }; },
//   },
// });

// const { actions, reducer } = filtersSlice;

// export const { setLabels, setShowCompleted } = actions;
// export default reducer;

const actionTypes = {
  SET_LABELS: 'FILTER/SET_LABELS',
  SET_SHOW_COMPLETED: 'FILTERS/SET_SHOW_COMPLETED',
};

const initialState = { labels: '', showCompleted: false };

export const setLabels = payload => ({ type: actionTypes.SET_LABELS, payload });
export const setShowCompleted = payload => ({ type: actionTypes.SET_SHOW_COMPLETED, payload });

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LABELS: {
      return { ...state, labels: action.payload };
    }
    case actionTypes.SET_SHOW_COMPLETED: {
      return { ...state, showCompleted: action.payload };
    }
    default: {
      return state;
    }
  }
}
