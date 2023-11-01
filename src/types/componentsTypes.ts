export type SideBarLinkType = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  href: string;
  text: string;
  iconName: React.ReactElement;
};

export type SideBarType = {
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  show?: boolean;
};
