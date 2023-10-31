import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from "../components/common/Backdrop";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  console.log("authenticated user", user);

  if (isLoading) return <Backdrop />;

  return <div>Profile</div>;
};

export default Profile;
