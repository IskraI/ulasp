/* eslint-disable react/prop-types */
import { NavigationLink } from "./NavigationLink.styled";

const MediaNavigationLink = ({ link, showNavigationLink }) => {
  return (
    <NavigationLink to={link} showNavigationLink={showNavigationLink}>
      Дивитись всі
    </NavigationLink>
  );
};

export default MediaNavigationLink;
