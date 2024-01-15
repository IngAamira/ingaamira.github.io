/*Menu Header*/
export  interface MenuItemHeader {
  flag : string;
  getName: string;
  event: () => void;
}

/*Menu Navbar*/
export  interface MenuItemNav {
  route: string;
  img: string;
}

/*Menu Resume*/
export interface MenuItemResume {
  name : string;
  event: () => void;
}
