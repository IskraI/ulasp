import { NavigationLink, List } from './NavMusic.styled';

// const NavMusic = () => {
   
    
//   return (
//     <nav>
//       <List>
//         <li>
//           <NavigationLink
//             to="/user/medialibrary/newplaylists"
//                       >
//             Нові плейлисти
//           </NavigationLink>
//         </li>
//         <li>
//           <NavigationLink
//             to="/user/medialibrary/newtracks"
//                       >
//             Нова музика
//           </NavigationLink>
//         </li>
//       </List>
//     </nav>
//   );
// };

const NavMusic = ({ links }) => {
  console.log('Links:', links); // Add this line to check the value of links

  return (
    <nav>
      <List>
        {links && links.map((link, index) => (
          <li key={index}>
            <NavigationLink to={link.path}>{link.title}</NavigationLink>
          </li>
        ))}
      </List>
    </nav>
  );
};

export default NavMusic;