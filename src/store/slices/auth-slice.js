import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice;