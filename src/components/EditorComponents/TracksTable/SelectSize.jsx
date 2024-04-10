import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";

const PageSizeSelect = styled.select`
  width: auto;
  height: 26px;
  display: flex;
  padding: 4px;
  margin-right: ${({ totalPages }) => (totalPages > 1 ? "84px" : "0")};
  border: 1px solid ${colors.mainFontColor};
  border-radius: 10px;
  outline: none;
  background-color: transparent;
`;

const SelectPageSize = ({
  pageSize,
  totalPages,
  optionValue = [],
  onChange,
}) => {
  return (
    <>
      <PageSizeSelect
        name="selectPageSize"
        id="selectPageSize"
        value={pageSize}
        selected={pageSize}
        totalPages={totalPages}
        onChange={(e) => onChange(e.currentTarget.value)}
      >
        {optionValue.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </PageSizeSelect>
    </>
  );
};

SelectPageSize.propTypes = {
  pageSize: PropTypes.number,
  totalPages: PropTypes.number,
  optionValue: PropTypes.array,
  onChange: PropTypes.func,
};

export default SelectPageSize;
