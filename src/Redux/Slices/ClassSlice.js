import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classes: [],
};

const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    setClass(state, action) {
      state.classes = action.payload;
    },
    addClass(state, action) {
      state.classes.push(action.payload);
    },
    removeClass(state, action) {
      state.classes = state.classes.filter(classstu => classstu.id !== action.payload);
    },
    updateClass(state, action) {
      const index = state.classes.findIndex(classstu => classstu.id === action.payload.id);
      if (index !== -1) {
        state.classes[index] = action.payload;
      }
    },
  },
});

export const { setClass, addClass, removeClass, updateClass } = classSlice.actions;
export default classSlice.reducer;
