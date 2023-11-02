import { IconType } from "react-icons/lib";

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

export type BookType = {
  id: number;
  name: string;
  description: string;
};

export type EmptyValueType = {
  name: String;
  title: String;
  Icon: IconType;
  style?: String;
};

export type UpdateBookType = {
  book: BookType;
  refetch: () => void;
  isOpen: boolean;
  onClose: () => void;
};
