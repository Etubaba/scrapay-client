import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from "../components/common/Backdrop";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideNav from "../components/dashboard/SideBarNav";

const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
  }

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
