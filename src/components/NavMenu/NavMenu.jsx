// import { useLocation } from "react-router-dom";

import {
    Nav,
    List,
    Item,
    NavigationLink,
   } from './NavMenu.styled';
import symbol from '../../assets/symbol.svg'
  

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
          <NavLink href="/cabinet">Кабінет</NavLink>
        </Item>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-message`}></use>
          </svg>
          <NavLink href="/messages">Повідомлення</NavLink>
        </Item>
        <Item>
          {" "}
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-list`}></use>
          </svg>
          <NavLink href="/user">Користувачі</NavLink>
        </Item>
        <Item>
          {" "}
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-online`} width="24" height="24"></use>
          </svg>
          <NavLink href="/online">Онлайн</NavLink>
        </Item>
        <Item>
          <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-analytics`}></use>
          </svg>
          <NavLink href="/analytics">Аналітика</NavLink>
        </Item>
      </List>
    </Nav>


  );
};
