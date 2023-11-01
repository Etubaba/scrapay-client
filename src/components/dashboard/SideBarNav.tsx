import { useState } from "react";
import SideBarLink from "./SideBarLink";
import { BiLogOut, BiBookAdd } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { TbBook2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import { SideBarType } from "../../types/componentsTypes";
import { useAuth0 } from "@auth0/auth0-react";

const SideNav = ({ setShow, show }: SideBarType) => {
  const [currentIndex, setIndex] = useState(0);

  const { logout } = useAuth0();

  const sideNavList = [
    {
      id: 1,
      iconName: <TbBook2 />,
      text: "Books",
      href: "/profile",
    },
    {
      id: 2,
      iconName: <BiBookAdd />,
      text: "Create Book",
      href: "/profile/create-book",
    },
  ];

  if (show !== undefined && show === false) return null;
  return (
    <div className="py-4 pl-4 bg-white transition  pr-4 relative md:static">
      <div className="h-screen  ">
        {sideNavList.map((sideNav, index) => (
          <SideBarLink
            iconName={sideNav.iconName}
            text={sideNav.text}
            href={`${sideNav.href}`}
            setIndex={setIndex}
            index={index}
            key={sideNav.id}
          />
        ))}

        <div className="w-[95%] flex mt-16 md:mt-60 border-t  pt-4">
          <div
            onClick={() => logout({ logoutParams: { returnTo: "/" } })}
            className="  cursor-pointer text-red-600 hover:text-red-700 mb-3 items-center  flex space-x-1 "
          >
            <BiLogOut className=" text-lg  " />
            <p className="">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
