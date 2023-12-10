import styled from "@emotion/styled";
import { colors } from "../../styles/vars";

export const UserName = styled.p`
  color: ${colors.mainFontColor};
  text-align: center;
  font-size: 22px;
  line-height: calc(26.4 / 22);
  margin-top: 18px;
  margin-bottom: 58px; // в будущем исправить
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto 0 auto;
`;

export const ProfileAvatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 62px;
`;
