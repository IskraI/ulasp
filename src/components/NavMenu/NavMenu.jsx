import { useNavigate, Navigate, NavLink } from "react-router-dom";

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
import { useState } from "react";

export const NavMenu = () => {
  const user = useSelector(getUserState);

  const [menuVisible, setMenuVisible] = useState(false);

  let propNav;

  propNav = user.adminRole
    ? propAdminNav
    : user.editorRole
    ? propEditorNav
    : propUserNav;

  const toogleLink = () => {
    return setMenuVisible((prevMenuVisible) => !menuVisible);
  };

  const disableMenu = () => {
    setMenuVisible(false);
  };

  return (
    <Nav>
      <List>
        {propNav.map((item) => {
          return (
            <Item key={item.id}>
              <NavigationLink
                to={item.navigation}
                onClick={item.menu ? toogleLink : disableMenu}
              >
                <svg className="icon" width="24" height="24">
                  <use href={item.picture}></use>
                </svg>
                {item.title}
              </NavigationLink>
              <List>
                {item.menu?.map((menu) => (
                  <SubItem key={menu.id}>
                    {menu && menuVisible && (
                      <SubMenuLink to={menu.navigation}>
                        <svg className="icon" width="24" height="24">
                          <use href={menu.picture}></use>
                        </svg>
                        {menu.title}
                      </SubMenuLink>
                    )}
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
