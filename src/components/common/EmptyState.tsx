import { EmptyValueType } from "../../types/componentsTypes";
import React from "react";

const EmptyState = ({ title, Icon, name, style }: EmptyValueType) => {
  return (
    <div className={`my-6 ${style !== undefined ? style : ""} `}>
      <div className="border  flex flex-col bg-white  space-y-3 p-5 md:p-20 justify-center items-center rounded-md">
        <div className=" bg-[#F2F5FF]   border rounded-full p-2">
          <Icon className="text-primary text-lg" />
        </div>

        <p className="text-title  my-2 text-lg font-semibold">{title}</p>

        <p className="text-sm  text-textcolor  text-center">{`Hi , there is no ${name} details available`}</p>
      </div>
    </div>
  );
};

export default EmptyState;
