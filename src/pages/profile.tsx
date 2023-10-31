import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Backdrop from "../components/common/Backdrop";

const Profile = () => {
  const [token, setToken] = useState<string | null>(null);
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  console.log("authenticated user", user);

  useEffect(() => {
    (async () => {
      const accessToken = await getAccessTokenSilently();

      console.log("token", accessToken);
      setToken(accessToken);
    })();
  }, [isAuthenticated]);

  console.log("state", token);

  // const getToken = useCallback(async () => {
  //   const accessToken = await getAccessTokenSilently();
  //   return accessToken;
  // }, [])

  if (isLoading) return <Backdrop />;

  return <div>Profile</div>;
};

export default Profile;
