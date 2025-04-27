import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  jwt: string | null;
  userId: number | null;
}

const initialState: AuthState = { jwt: null, userId: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ jwt: string; userId: number }>) {
      state.jwt = action.payload.jwt;
      state.userId = action.payload.userId;
    },
    logout(state) {
      state.jwt = null;
      state.userId = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
