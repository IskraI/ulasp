import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { NavigationLink, Wrapper } from "./NavigationLink.styled";

const MediaNavigationLink = ({ link, showNavigationLink }) => {
  const MediaNavigationLinkProps = {
    showNavigationLink: showNavigationLink ? "flex" : "none",
  };

  const location = useLocation();

  return (
    <Wrapper>
      <NavigationLink
        to={link}
        state={{ from: location }}
        shownavigationlink={MediaNavigationLinkProps.showNavigationLink}
      >
        Дивитись всі
      </NavigationLink>
    </Wrapper>
  );
};

MediaNavigationLink.propTypes = {
  link: PropTypes.string,
  showNavigationLink: PropTypes.bool,
};

export default MediaNavigationLink;
