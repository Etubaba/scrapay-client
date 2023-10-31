import { Link, useLocation } from "react-router-dom";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className=" px-8 py-4 z-50  font-sans  lg:flex shadow-sm  bg-white sticky top-0 justify-between items-center">
      <Link to="/">
        <h2 className="text-title logo text-primary  font-semibold">ℕ𝕚𝕟𝕛𝕒</h2>
      </Link>

      <nav className="flex space-x-12">
        <Link to="/">
          <p className="md:text-sm text-xs">Home</p>
        </Link>

        <Link to="/profile">
          <p className="md:text-sm text-xs">profile</p>
        </Link>
      </nav>

      <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
    </div>
  );
};

export default Header;
