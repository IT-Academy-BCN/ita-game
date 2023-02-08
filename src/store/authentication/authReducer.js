import { createNextState } from '@reduxjs/toolkit';

  let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : '';

export const initialState = {
  user: user,
  loading: false,
  isError: false,
};

export const Actions = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
};

export const authReducer = (state = initialState, action) => {
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
        draft.isError = true;
      });
    default: state
  }
};
