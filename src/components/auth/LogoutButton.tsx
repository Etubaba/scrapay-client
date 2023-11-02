import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      color="#003D29"
      variant="outline"
      colorScheme="#003D29"
      className="border px-4 py-1 rounded-md text-xs border-primary"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
