import { useContext, useEffect } from 'react';
import { UserContext } from '../store/UserContext';
import { Actions } from '../store/userReducer';

function Home() {
  const { state, dispatch } = useContext(UserContext);
  const { users } = state;

  // dispatch genera un side efffect (por setear el state (setState))y por eso en useEffect
  useEffect(() => {
    dispatch({ type: Actions.ADD_USER, payload: users });
  }, [users, dispatch]);

  console.log(users);
  return (
    // card
    <div>
      {users.map((user) => (
        <ul style={{ border: '1px black solid' }} key={user.id}>
          <li>{user.name}</li>
          <li>{user.ITAProfile}</li>
          <li>{user.ITApoints}</li>
        </ul>
      ))}
    </div>
  );
}

export default Home;
