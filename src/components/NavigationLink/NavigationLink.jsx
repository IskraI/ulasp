/* eslint-disable react/prop-types */
import { NavigationLink } from "./NavigationLink.styled";

const MediaNavigationLink = ({ link, showNavigationLink }) => {
  const MediaNavigationLinkProps = {
    showNavigationLink: showNavigationLink ? "flex" : "none",
  };

  return (
    <NavigationLink
      to={link}
      shownavigationlink={MediaNavigationLinkProps.showNavigationLink}
    >
      Дивитись всі
    </NavigationLink>
  );
};

export default MediaNavigationLink;
