// import { useLocation } from "react-router-dom";

import { Nav, List, Item, NavigationLink } from "./NavMenu.styled";
import symbol from "../../assets/symbol.svg";

import icon from "../../assets/symbol-defs.svg";

export const NavMenu = () => {
  //   const location = useLocation();

  return (
    <Nav>
      <List>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-cabinet`}></use>
          </svg>
          <NavigationLink to="cabinet">Кабінет</NavigationLink>
        </Item>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-mail`}></use>
          </svg>

          <NavigationLink to="messages">Повідомлення</NavigationLink>
        </Item>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-list`}></use>
          </svg>
          <NavigationLink to="users">Користувачі</NavigationLink>
        </Item>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-online`} width="24" height="24"></use>
          </svg>
          <NavigationLink to="online">Онлайн</NavigationLink>
        </Item>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-analytics`}></use>
          </svg>
          <NavigationLink to="analytics">Аналітика</NavigationLink>
        </Item>
      </List>
    </Nav>
  );
};
