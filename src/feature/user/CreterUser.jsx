import { createSlice } from "@reduxjs/toolkit";
 
const userValue = {
    user: "asadbek",
}

export const CreateUser = createSlice({
  name: "user",
  initialState: userValue,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    loguot: (state) => {
      state.user = null;
    },
  },
});

export const {} = CreateUser.actions
export default CreateUser.reducer