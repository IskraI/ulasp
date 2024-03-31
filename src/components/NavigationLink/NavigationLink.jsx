/* eslint-disable react/prop-types */
import { NavigationLink, Wrapper } from "./NavigationLink.styled";

const MediaNavigationLink = ({ link, showNavigationLink }) => {
  const MediaNavigationLinkProps = {
    showNavigationLink: showNavigationLink ? "flex" : "none",
  };

  return (
    <Wrapper>
      <NavigationLink
        to={link}
        shownavigationlink={MediaNavigationLinkProps.showNavigationLink}
      >
        Дивитись всі
      </NavigationLink>
    </Wrapper>
  );
};

export default MediaNavigationLink;
