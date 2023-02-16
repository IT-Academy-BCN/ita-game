import { createNextState } from '@reduxjs/toolkit';

export const initialState = {
  user: '',
  loading: false,
  errorMessage: null,
};

export const Actions = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_START:
      return createNextState(state, (draft) => {
        draft.loading = true;
      });
    case Actions.LOGIN_SUCCESS:
      return createNextState(state, (draft) => {
        draft.user = action.payload;
        draft.loading = false;
      });
    case Actions.LOGIN_ERROR: 
      return createNextState(state, (draft) => {
        draft.loading = false;
        draft.errorMessage = action.payload
      });
    case Actions.LOGOUT:
      return createNextState(state, (draft) => {
        draft.user = '';
      });
    default:
      state;
  }
};
