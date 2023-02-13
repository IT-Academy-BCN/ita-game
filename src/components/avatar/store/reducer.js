export const initialState = {
  user: {
    id: 1,
    name: 'Joan',
    surname: 'Artola',
    email: 'test1@test.test',
    password: 'Test1-1234!',
    framework: 'Frontend React',
    ITApoints: 123,
    ITAawards: ['Solete', 'Megamind', 'Imparable'],
    activities: 30,
    avatar: {
      sex: 'woman',
      hairStyle: 'thick', // normal, thick, mohawk, womanLong, womanShort
      hairColor: '#BA4A00',
      faceColor: '#FAD7A0',
      hatStyle: 'none',
      hatColor: '#F1C40F',
      eyeStyle: 'smile',
      earSize: 'big',
      glassesStyle: 'round',
      noseStyle: 'long',
      shirtStyle: 'short',
      shirtColor: '#BB8FCE',
      bgColor: '#58c914'
    }
  }
}

export const actions = {
  UPDATE_AVATAR: 'UPDATE_AVATAR'
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.payload
        }
      }

    default:
      return state

      throw Error('Unknown action: ' + action.type)
  }
}
