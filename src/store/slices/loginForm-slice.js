import { createSlice } from '@reduxjs/toolkit';

const initialFormSliceState = {
  formIsValid: false
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: '',
  reducers: {
    // form validation 
  }
});

export default loginFormSlice;