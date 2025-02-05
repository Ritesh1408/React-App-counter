import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  address: string;
  email: string;
  phone: string;
  id: string;
}

const initialState: UserState = {
  name: "",
  address: "",
  email: "",
  phone: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

