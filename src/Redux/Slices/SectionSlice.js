import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sections: [],
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setSections(state, action) {
      state.sections = action.payload;
    },
    addSection(state, action) {
      state.sections.push(action.payload);
    },
    removeSection(state, action) {
      state.sections = state.sections.filter(section => section.id !== action.payload);
    },
    updateSection(state, action) {
      const index = state.sections.findIndex(section => section.id === action.payload.id);
      if (index !== -1) {
        state.sections[index] = action.payload;
      }
    },
  },
});

export const { setSections, addSection, removeSection, updateSection } = sectionSlice.actions;
export default sectionSlice.reducer;
