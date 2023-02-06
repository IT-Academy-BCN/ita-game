import { createNextState } from '@reduxjs/toolkit';
// initial state para arrancar app
export const initialState = {
  users: [
    {
      id: 1,
      name: 'Joan',
      ITAProfile: 'Frontend',
      ITAFramework: 'React',
      ITApoints: 123,
    },
    {
      id: 2,
      name: 'Ana',
      ITAProfile: 'Frontend',
      ITAFramework: 'React',
      ITApoints: 143,
    },
  ],
};
// organizo actions en obj para no tener string
export const Actions = {
  ADD_USER: 'ADD_USER',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Agrego user
    case Actions.ADD_USER:
      // immer: utilizo método para no implementar spread operator
      //                             draft:nuevo state
      return createNextState(state, (draft) => {
        draft.users = action.payload;
      });

    default:
      return state;
  }
};
