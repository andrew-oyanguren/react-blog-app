import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userData: null
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      console.log(state.userData);
    }
  }
});

export const { setUserData } = userSlice.actions;

export default userSlice;