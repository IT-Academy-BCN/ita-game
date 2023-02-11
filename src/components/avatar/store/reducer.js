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
      hairStyle: 'normal',
      hairColor: '#BA4A00',
      faceColor: '#FAD7A0',
      hatStyle: 'beanie',
      hatColor: '#F1C40F',
      eyeStyle: 'smile',
      glassesStyle: 'round',
      noseStyle: 'long',
      shirtStyle: 'short',
      shirtColor: '#BB8FCE',
      bgColor: '#58c914'
    }
  }
}

export function reducer(state = initialState, action) {
  return { state }
}
