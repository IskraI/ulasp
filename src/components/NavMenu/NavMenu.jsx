// import { useLocation } from "react-router-dom";
import {
    Nav,
    List,
    Item,
    NavigationLink,
   } from './NavMenu.styled';
import symbol from '../../assets/symbol.svg'
  


export const NavMenu = () => {
//   const location = useLocation();

  return (
   
       <Nav>
      <List>
        <Item><svg className="icon" width="24" height="24" >
            <use  href={`${symbol}#icon-cabinet`}></use>
          </svg><NavigationLink href="/cabinet">Кабінет</NavigationLink></Item>
              <Item><svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-mail`}></use>
          </svg><NavigationLink href="/messages">Повідомлення</NavigationLink></Item>
        <Item> <svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-list`}></use>
          </svg><NavigationLink href="/user">Користувачі</NavigationLink></Item>
        <Item> <svg className="icon" width="24" height="24">
            <use  href={`${symbol}#icon-online`} width="24" height="24"></use>
          </svg><NavigationLink href="/online">Онлайн</NavigationLink></Item>
        <Item><svg className="icon" width="24" height="24">
            <use href={`${symbol}#icon-analytics`}></use>
          </svg><NavigationLink href="/analytics">Аналітика</NavigationLink></Item>
        
          </List>
              </Nav>
  );
   
};