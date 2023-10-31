import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from "../components/common/Backdrop";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  if (isLoading) return <Backdrop />;
  return <div>Profile</div>;
};

export default Profile;
