import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    age: null
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    resetProfile: (state) => {
      state.name = '';
      state.email = '';
      state.age = null;
    }
  }
});

export const { setName, setEmail, setAge, resetProfile } = userSlice.actions;
export default userSlice.reducer;
