import { createSlice } from 'redux-starter-kit';

const filtersSlice = createSlice({
  slice: 'filters',
  initialState: { showCompleted: false, filters: '' },
  reducers: {
    setFilters(state, action) { return { ...state, filters: action.payload }; },
    setShowCompleted(state, action) { return { ...state, showCompleted: action.payload }; },
  },
});

const { actions, reducer } = filtersSlice;

export const { setFilters, setShowCompleted } = actions;
export default reducer;
