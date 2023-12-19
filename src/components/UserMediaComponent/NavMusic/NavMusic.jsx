import { NavigationLink, List } from './NavMusic.styled';

const NavMusic = () => {
   
    
  return (
    <nav>
      <List>
        <li>
          <NavigationLink
            to="/user/medialibrary/newplaylists"
                      >
            Нові плейлисти
          </NavigationLink>
        </li>
        <li>
          <NavigationLink
            to="/user/medialibrary/newtracks"
                      >
            Нова музика
          </NavigationLink>
        </li>
      </List>
    </nav>
  );
};

export default NavMusic;