/*Menu Header*/
export  interface MenuItemHeader {
  flag : string;
  img: string;
  event: () => void;
}

/*Title*/
export  interface ItemTitle {
  title : string;
}

/*Menu Navbar*/
export  interface MenuItemNav {
  route: string;
  img: string;
  name: string;
}

/*Menu Resume*/
export interface MenuItemResume {
  name : string;
  event: () => void;
}

/*Menu Footer and Contact*/
export  interface MenuItemContact {
  url : string;
  img: string;
  flag: string;
}
