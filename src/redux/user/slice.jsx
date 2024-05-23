import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      
      if(action.payload.name.length <= 0) {
        alert('preencha o nome')
        return{...state}
      }

      return {
        ...state,
        user: {
          name: action?.payload.name,
          email: action?.payload.email,
          address: null,
        },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },
  },
});

export const { createUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
