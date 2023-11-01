import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Backdrop from "../components/common/Backdrop";
import { Link, redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideNav from "../components/dashboard/SideBarNav";

const Profile = () => {
  //const [token, setToken] = useState<string | null>(null);
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  //if (!isAuthenticated) redirect("/");

  // useEffect(() => {
  //   (async () => {
  //     const accessToken = await getAccessTokenSilently();
  //     setToken(accessToken);
  //   })();
  // }, [isAuthenticated]);

  if (isLoading) return <Backdrop />;

  return (
    <div className={"w-full overflow-hidden"}>
      <div className="flex flex-col justify-between h-screen lg:flex-row md:space-y-3 lg:space-y-0 ">
        <div className="w-full  hidden lg:block animate__fadeInLeft shadow-md   border-r lg:h-full   lg:w-1/6 pb-24 ">
          <SideNav />
        </div>
        <section
          className={
            "w-full lg:w-5/6 md:p-5  p-3   shadow-md    bg-[#FDFDFF] h-full pb-16 overflow-y-scroll"
          }
        >
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Profile;
