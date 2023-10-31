import { Link, useLocation } from "react-router-dom";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className=" px-8 py-4 z-50 hidden font-sans  lg:flex shadow-sm  bg-white sticky top-0 justify-between items-center">
      <Link to="/">
        <h2 className="text-title logo text-primary  font-semibold">ℕ𝕚𝕟𝕛𝕒</h2>
      </Link>

      <nav className="flex space-x-12">
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/profile">
          <p>profile</p>
        </Link>
      </nav>

      <div>
        {currentPath === "/profile" ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
