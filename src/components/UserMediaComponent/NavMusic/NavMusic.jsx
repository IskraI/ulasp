import { NavigationLink, List } from './NavMusic.styled';
import { useLocation } from 'react-router-dom';

const NavMusic = () => {
    const location = useLocation(); 
    
  return (
    <nav>
      <List>
        <li>
          <NavigationLink
            to="/user/medialibrary/newplaylists"
            // activeClassName="active-link"
            //           isActive={() => location.pathname.startsWith('/user/medialibrary/newplaylists')}
            //           exact
          >
            Нові плейлисти
          </NavigationLink>
        </li>
        <li>
          <NavigationLink
            to="/user/medialibrary/newtracks"
            // activeClassName="active-link"
            //           isActive={() => location.pathname.startsWith('/user/medialibrary/newtracks')}
            //           exact
          >
            Нова музика
          </NavigationLink>
        </li>
      </List>
    </nav>
  );
};

export default NavMusic;