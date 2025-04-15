import styled from '@emotion/styled';
import { colors, media } from '../../styles/vars';

const { tablet } = media;

export const PageFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  max-height: 136px;
  background-color: rgba(206, 204, 193, 0.5);
  border-top: 2px solid ${colors.primaryColor};

  ${tablet} {
    height: 68px;
  }
`;

export const Content = styled.div`
  padding: 0 10px;

  ${media.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const PageLogo = styled.img`
  width: 28px;
  height: 34px;

  ${tablet} {
  }
`;

export const ListContact = styled.ul`
  ${tablet} {
    margin-left: 64px;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  color: ${colors.mainFontColor};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);
  margin-top: 8px;
  ${tablet} {
    font-size: 14px;
  }
`;

export const ContactAdress = styled.p`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);

  ${tablet} {
    font-size: 14px;
  }
`;
