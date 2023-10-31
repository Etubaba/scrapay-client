import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      color="#003D29"
      colorScheme="#003D29"
      variant="outline"
      className="border px-4 py-1.5 rounded-md text-xs border-primary"
    >
      Login
    </Button>
  );
};

export default LoginButton;
