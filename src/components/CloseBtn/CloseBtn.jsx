import PropTypes from 'prop-types';

import { CloseButton, CloseIcon } from './CloseBtn.styled';

const CloseButtonComponent = ({ onClick }) => {
  return (
    <CloseButton onClick={onClick}>
      <CloseIcon></CloseIcon>
    </CloseButton>
  );
};

CloseButtonComponent.propTypes = {
  onClick: PropTypes.func
};

export default CloseButtonComponent;
