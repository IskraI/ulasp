import PropTypes from "prop-types";

import symbol from "../../assets/symbol.svg";

const CustomControl = ({ onClick, loop }) => {
  return (
    <button
      style={{
        width: "28px",
        height: "28px",
        padding: "0",
        border: "none",
        outline: "none",
        background: "none",
        marginLeft: "24px",
      }}
      title={loop ? "Повторювання увімкнено" : "Повторювання вимкнено"}
      onClick={onClick}
    >
      <svg width="32px" height="32px">
        {loop ? (
          <use href={`${symbol}#icon-loop`} />
        ) : (
          <use href={`${symbol}#icon-loop-false`} />
        )}
      </svg>
    </button>
  );
};

CustomControl.propTypes = {
  onClick: PropTypes.func,
  loop: PropTypes.bool,
};

export default CustomControl;
