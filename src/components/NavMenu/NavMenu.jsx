import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
// import { TabNavigation } from "../TabNavigation/TabNavigation";
import { getUserState } from "../../redux/userSelectors";
import {
  propAdminNav,
  propEditorNav,
  propUserNav,
} from "../../constants/navConstants";
import { Nav, List, Item, NavigationLink } from "./NavMenu.styled";

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
    <Nav>
      <List>
        {propNav.map((item) => (
          <Item key={item.id}>
            <NavigationLink to={item.navigation}>
              <svg className="icon" width="24" height="24">
                <use href={item.picture}></use>
              </svg>
              {item.title}
            </NavigationLink>
          </Item>
        ))}
      </List>
    </Nav>
  );
};
