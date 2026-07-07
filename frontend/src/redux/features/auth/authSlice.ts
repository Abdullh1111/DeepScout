import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AuthResponse, AuthUser } from "@/types/auth.interface";

const STORAGE_KEY = "auth";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
}

const initialState: AuthState = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
    },
    loadCredentials: (state) => {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      try {
        const saved = JSON.parse(raw) as AuthResponse;
        state.user = saved.user;
        state.token = saved.accessToken;
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { setCredentials, loadCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
