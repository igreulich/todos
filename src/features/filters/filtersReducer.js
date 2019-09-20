import { createSlice } from 'redux-starter-kit';

const filtersSlice = createSlice({
  slice: 'filters',
  initialState: { showCompleted: false, labels: '' },
  reducers: {
    setLabels(state, action) { return { ...state, labels: action.payload }; },
    setShowCompleted(state, action) { return { ...state, showCompleted: action.payload }; },
  },
});

const { actions, reducer } = filtersSlice;

export const { setLabels, setShowCompleted } = actions;
export default reducer;
