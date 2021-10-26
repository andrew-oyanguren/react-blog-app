import { createSlice } from '@reduxjs/toolkit';

const initSideDrawerState = {
  isOpen: false
};

const sideDrawerSlice = createSlice({
  name: 'sideDrawer',
  initialState: initSideDrawerState,
  reducers: {
    toggleDrawer(state) {
      state.isOpen = !state.isOpen;
    },
    closeDrawer(state) {
      state.isOpen = false;
    }
  }
});

export const sideDrawerActions = sideDrawerSlice.actions;

export default sideDrawerSlice;
