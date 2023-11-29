import { useLocation, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
// import { TabNavigation } from "../TabNavigation/TabNavigation";
import { getUserState } from "../../redux/userSelectors";
import {
  propAdminNav,
  propEditorNav,
  propUserNav,
} from "../../constants/navConstants";
import {
  Nav,
  List,
  Item,
  SubItem,
  NavigationLink,
  SubMenuLink,
} from "./NavMenu.styled";

export const NavMenu = () => {
  const user = useSelector(getUserState);
  let propNav;
  switch (user.adminRole) {
    case true:
      propNav = propAdminNav;
      break;

    case false:
      propNav = propEditorNav;
      break;

    default:
      propNav = propUserNav;
  }

  return (
    // <Nav>
    //   <List>
    //     {propNav.map((item) => (
    //       <Item key={item.id}>
    //         <NavigationLink to={item.navigation}>
    //           <svg className="icon" width="24" height="24">
    //             <use href={item.picture}></use>
    //           </svg>
    //           {item.title}
    //         </NavigationLink>
    //       </Item>
    //     ))}
    //   </List>
    // </Nav>
    <Nav>
      <List>
        {propNav.map((item) => {
          return (
            <Item key={item.id}>
              <NavigationLink to={item.navigation}>
                <svg className="icon" width="24" height="24">
                  <use href={item.picture}></use>
                </svg>
                {item.title}
              </NavigationLink>
              <List>
                {item.menu?.map((menu) => (
                  <SubItem key={menu.id}>
                    <SubMenuLink to={menu.navigation}>
                      <svg className="icon" width="24" height="24">
                        <use href={menu.picture}></use>
                      </svg>
                      {menu.title}
                    </SubMenuLink>
                  </SubItem>
                ))}
              </List>
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};
