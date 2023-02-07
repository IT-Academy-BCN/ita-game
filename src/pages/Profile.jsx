import { useContext } from "react";
import { AuthContext } from "../store/authentication/AuthContext";

function Profile() {
  const { state } = useContext(AuthContext)
  const { user } = state
  return <div>{user.name} io</div>;
}

export default Profile;
