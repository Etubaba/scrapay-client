import { Link } from "react-router-dom";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@chakra-ui/react";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="px-3 md:px-8 py-4 z-50  font-sans  flex shadow-sm  bg-white sticky top-0 justify-between items-center">
      <Link to="/">
        <h2 className="text-title logo text-primary  font-semibold">ℕ𝕚𝕟𝕛𝕒</h2>
      </Link>

      {isAuthenticated && (
        <div className="md:flex space-x-3 items-center hidden">
          <p className="text-sm text-text ">Hi,{user?.nickname}</p>
          <div>
            <img className="w-7 h-7 rounded-full" src={user?.picture} />
          </div>
        </div>
      )}

      <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
    </div>
  );
};

export default Header;
