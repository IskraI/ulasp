import styled from "@emotion/styled";
import { colors } from "../../../styles/vars";
export const PlaylistIconsWrapper = styled.div`
  display: flex;
   align-items: center;
 
`;

export const PlaylistDeleteButton = styled.button`
  background: none;
  border: none;

  &:disabled {
    svg {
      fill: ${colors.bBgModal};
    }
  }
`;