import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { labels: '', showCompleted: false },
  reducers: {
    setLabels(state, action) { return { ...state, labels: action.payload }; },
    setShowCompleted(state, action) { return { ...state, showCompleted: action.payload }; },
  },
});

const { actions, reducer } = filtersSlice;

export const { setLabels, setShowCompleted } = actions;
export default reducer;
