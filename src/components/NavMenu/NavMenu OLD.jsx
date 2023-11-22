import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
// import { TabNavigation } from "../TabNavigation/TabNavigation";
import { getUserState } from "../../redux/userSelectors";
import {
  propAdminNav,
  propEditorNav,
  propUserNav,
} from "../../constants/navConstants";
import { Nav, List, Item, NavigationLink, Line } from "./NavMenu.styled";

export const NavMenu = () => {
  const location = useLocation();

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
              <Line></Line>
              <svg className="icon" width="24" height="24">
                <use href={item.picture}></use>
              </svg>
              {item.title}
            </NavigationLink>
          </Item>
        ))}

        {/*  <Item>
          <NavigationLink to="cabinet">
            <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-cabinet`}></use>
            </svg> */}
        {/* Кабінет */}
        {/* {navCabinet.title} */}
        {/* {location.pathname === '/admin/cabinet' && (
              <svg width="287" height="876" viewBox="0 0 287 876" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M287 392.1V876H11H0V864.986V0H287V314.65C287 320.345 287 323.192 285.874 325.36C284.925 327.186 283.436 328.675 281.61 329.624C279.442 330.75 276.595 330.75 270.9 330.75H51.6C45.9051 330.75 43.0576 330.75 40.8903 331.876C39.0638 332.825 37.5746 334.314 36.6259 336.14C35.5 338.308 35.5 341.155 35.5 346.85V359.9C35.5 365.595 35.5 368.442 36.6259 370.61C37.5746 372.436 39.0638 373.925 40.8903 374.874C43.0576 376 45.9051 376 51.6 376H270.9C276.595 376 279.442 376 281.61 377.126C283.436 378.075 284.925 379.564 285.874 381.39C287 383.558 287 386.405 287 392.1Z" fill="url(#paint0_linear_973_14773)" fill-opacity="0.5" stroke="#FFF3BF" stroke-width="2" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_973_14773" x1="143.5" y1="0" x2="143.5" y2="876" gradientUnits="userSpaceOnUse">
<stop offset="0.0260417" stopColor="#1C548D"/>
<stop offset="1" stopColor="#FFF3BF"/>
</linearGradient>
</defs>
</svg>
            )} */}
        {/* </NavigationLink>
        </Item>
        
        
        <Item>
          <NavigationLink to="messages">
            <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-mail`}></use>
            </svg>
            Повідомлення
          </NavigationLink>
        </Item>
       
       
       
        <Item>
          <NavigationLink to="users">
            <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-list`}></use>
            </svg>
            Користувачі
          </NavigationLink>
        </Item>
        <Item>
          <NavigationLink to="online">
            <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-online`} width="24" height="24"></use>
            </svg>
            Онлайн
          </NavigationLink>
        </Item>
        <Item>
          <NavigationLink to="analytics">
            <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-analytics`}></use>
            </svg>
            Аналітика
          </NavigationLink>
        </Item>*/}
      </List>
      {/* <TabNavigation currentPath={location.pathname || ''} /> */}
    </Nav>
  );
};
