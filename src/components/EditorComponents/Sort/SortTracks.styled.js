import styled from "@emotion/styled";
import { colors, mainCubicTransition } from "../../../styles/vars";

export const SortBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "auto")};
  margin-left: 24px;
  padding: 0;
`;

export const SvgSort = styled.svg`
  margin: auto;
  fill: #000000;
  transform: rotate(
    ${(props) => (props.transformIcon ? props.transformIcon + "deg" : "0deg")}
  );

  transition: all 550ms ${mainCubicTransition};

  &:hover {
    fill: ${colors.accentHoverColor};

    transform: rotate(
      ${({ transformIcon }) => {
        transformIcon ? transformIcon + "deg" : "0deg";
      }}
    );
    transition: all 550ms ${mainCubicTransition};
  }
`;
