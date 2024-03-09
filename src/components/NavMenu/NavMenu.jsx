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
  // const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);

  let propNav;

  propNav = user.adminRole
    ? propAdminNav
    : user.editorRole
    ? propEditorNav
    : propUserNav;

  return (
    <Nav>
      <List>
        {propNav.map((item, index) => {
          return (
            <Item key={item.id}>
              <NavigationLink
                to={item.navigation}
                onClick={() => {
                  if (item.menu) {
                    setActiveMenu(index);
                  } else {
                    setActiveMenu(null);
                  }
                }}
              >
                <svg className="icon" width="24" height="24">
                  <use href={item.picture}></use>
                </svg>
                {item.title}
              </NavigationLink>
              {index === activeMenu && (
                <List>
                  {item.menu?.map((menu) => {
                    return (
                      <SubItem key={menu.id}>
                        <SubMenuLink to={menu.navigation}>
                          <svg className="icon" width="24" height="24">
                            <use href={menu.picture}></use>
                          </svg>
                          {menu.title}
                        </SubMenuLink>
                      </SubItem>
                    );
                  })}
                </List>
              )}
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};
