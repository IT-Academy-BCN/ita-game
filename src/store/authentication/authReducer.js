import { createNextState } from '@reduxjs/toolkit';

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : '';

let token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).token
  : ''

export const initialState = {
  user: user,
  token: token,
  loading: false,
  errorMessage: null,
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
        draft.user = action.payload.user;
        draft.token = action.payload.token;
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
        draft.token = '';
      });
    default:
      state;
  }
};
