import PropTypes from 'prop-types';

import symbol from '../../assets/symbol.svg';

import { LoopBtn } from './Player.styled';

const CustomControl = ({ onClick, loop }) => {
  return (
    <LoopBtn
      title={loop ? 'Повторювання увімкнено' : 'Повторювання вимкнено'}
      onClick={onClick}
    >
      <svg>
        {loop ? (
          <use href={`${symbol}#icon-loop-on`} />
        ) : (
          <use href={`${symbol}#icon-loop-off`} />
        )}
      </svg>
    </LoopBtn>
  );
};

CustomControl.propTypes = {
  onClick: PropTypes.func,
  loop: PropTypes.bool
};

export default CustomControl;
