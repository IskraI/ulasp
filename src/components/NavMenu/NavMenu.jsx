import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { getUserState } from '../../redux/userSelectors';
import {
  propAdminNav,
  propEditorNav,
  propUserNav,
  propUserBlockNav
} from '../../constants/navConstants';
import {
  Nav,
  List,
  Item,
  SubItem,
  NavigationLink,
  SubMenuLink,
  SubMenu,
  Wrapper
} from './NavMenu.styled';

export const NavMenu = ({ closeMobileMenu }) => {
  const user = useSelector(getUserState);

  const [activeMenu, setActiveMenu] = useState(null);

  let propNav;

  propNav = user.adminRole
    ? propAdminNav
    : user.editorRole
    ? propEditorNav
    : user.status
    ? propUserNav
    : propUserBlockNav;

  return (
    <Nav>
      <List>
        {propNav.map((item, index) => {
          const isActive = index === activeMenu;
          return (
            <Item key={item.id}>
              <NavigationLink
                to={item.navigation}
                onClick={() => {
                  if (activeMenu !== null && isMobile) {
                    closeMobileMenu();
                  }
                  if (item.menu) {
                    setActiveMenu(isActive ? null : index);
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
              {item.menu && (
                <Wrapper>
                  <SubMenu open={isActive}>
                    {item.menu.map((menu, i) => (
                      <SubItem key={menu.id} active={isActive} index={i}>
                        <SubMenuLink
                          to={menu.navigation}
                          onClick={closeMobileMenu}
                        >
                          <svg className="icon" width="24" height="24">
                            <use href={menu.picture}></use>
                          </svg>
                          {menu.title}
                        </SubMenuLink>
                      </SubItem>
                    ))}
                  </SubMenu>
                </Wrapper>
              )}
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};

NavMenu.propTypes = {
  closeMobileMenu: PropTypes.func
};
