import { BtnSort } from './SortButton.styled'; 
import symbol from '../../assets/symbol.svg';

const SortButton = ({ onClick }) => {
  return (
    <BtnSort onClick={onClick}>
      <svg width="24" height="24">
        <use href={`${symbol}#icon-sort`}></use>
      </svg>
    </BtnSort>
  );
};

export default SortButton;