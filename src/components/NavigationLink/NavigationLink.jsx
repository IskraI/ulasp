/* eslint-disable react/prop-types */
import { NavigationLink } from "./NavigationLink.styled";

const MediaNavigationLink = ({ link, display }) => {
  return (
    <NavigationLink to={link} style={{ display }}>
      Дивитись всі
    </NavigationLink>
  );
};

export default MediaNavigationLink;
