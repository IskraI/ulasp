import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserState } from '../../redux/userSelectors';
import './MobileSidebar.css';
import {
  Nav,
  List,
  Item,
  SubItem,
  NavigationLink,
  SubMenuLink
} from '../NavMenu/NavMenu.styled';

import {
  propAdminNav,
  propEditorNav,
  propUserNav,
  propUserBlockNav
} from '../../constants/navConstants';

const MobileSidebar = () => {
  const [open, setOpen] = useState(true);
  const user = useSelector(getUserState);
  const [animateOut, setAnimateOut] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

  const closeMenu = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setOpen(false);
      setAnimateOut(false);
    }, 300); // длительность анимации
  };

  let propNav;

  propNav = user.adminRole
    ? propAdminNav
    : user.editorRole
    ? propEditorNav
    : user.status
    ? propUserNav
    : propUserBlockNav;

  return (
    <>
      <button className="menu-button" onClick={() => setOpen(true)}>
        ☰
      </button>

      {open && (
        <div className="overlay">
          <div className={`sidebar ${animateOut ? 'slide-out' : 'slide-in'}`}>
            <div className="sidebar-header">
              <h2>Меню</h2>
              <button onClick={closeMenu} className="close-button">
                ✕
              </button>
            </div>
            {/* <nav className="sidebar-nav">
              <a href="#">Главная</a>
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Вход<
              /a>
            </nav> */}
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
          </div>
          <div className="backdrop fade-in" onClick={closeMenu} />
        </div>
      )}
    </>
  );
};

export default MobileSidebar;
