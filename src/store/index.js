import { configureStore } from '@reduxjs/toolkit';

import sideDrawerSlice from './slices/sideDrawer-slice';
import AuthSlice from './slices/auth-slice';
import UserSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    sideDrawer: sideDrawerSlice.reducer,
    isAuth: AuthSlice.reducer,
    user: UserSlice.reducer
  }
});

export default store;