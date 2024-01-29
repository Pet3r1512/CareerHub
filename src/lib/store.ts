// store.js

import { Action, configureStore, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch, Provider, TypedUseSelectorHook, useSelector } from 'react-redux';

// Define the type for the user
interface User {
  full_name: string;
  uuid?: string;
  // Add other user properties as needed
}

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null as User | null,
  },
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // Add other reducers here if needed
  },
});

// Export actions for use in components
export const { login, logout } = authSlice.actions;

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Export the Redux provider
export { store, Provider as ReduxProvider };

// Define a custom useDispatch hook to include correct types
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

// Define a custom useAppSelector hook for accessing the Redux store state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Define a Thunk type for async actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
