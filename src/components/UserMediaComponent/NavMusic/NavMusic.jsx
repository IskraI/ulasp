import PropTypes from 'prop-types';
import { NavigationLink, List } from './NavMusic.styled';

const NavMusic = ({ links }) => {
  return (
    <nav>
      <List>
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <NavigationLink to={link.path}>{link.title}</NavigationLink>
            </li>
          ))}
      </List>
    </nav>
  );
};

NavMusic.propTypes = {
  links: PropTypes.array
};

export default NavMusic;
