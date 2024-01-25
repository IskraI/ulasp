import styled from "@emotion/styled";
import { colors } from "../../styles/vars";
import { NavLink, Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center; /* Центрируем по вертикали */
  //   height: calc(100vh - (80px + 68px + 64px + 86px + 130px));
  margin-left: auto;
  /* margin-top: 58px; */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  color: black;
  /* margin-right: 10px; */

  margin-left: auto;

  // gap: 21px;

  /* &.active {
     border: 2px solid #FFF3BF;
     background-image: url('../../../src/assets/VectorActive.svg');
      z-index:10;
    background-size: contain; 
/* opacity: 0.5; */
  /* background-repeat: no-repeat;
    background-position: right center;
   } */
`;

export const Item = styled.li`
  // display: flex;
  // align-items: center;
  // padding-left: 30px;
`;

export const SubItem = styled.li`
  /* margin-left: auto; */
  margin-left: 50px;
`;

export const NavigationLink = styled(NavLink)`
  color: ${colors.mainFontColor};
  display: flex;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(26.4 / 22);
  align-items: center;
  width: 253px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  border-right: 2px solid #fff3bf;

  position: relative;
  /* color: #fff; */
  cursor: pointer;

  svg {
    margin-right: 30px;
  }

  /* Add styling for the active link */
  &.active {
    border-right: none;
    border-top: 2px solid #fff3bf;
    border-bottom: 2px solid #fff3bf;
    border-left: 2px solid #fff3bf;
    color: #000;

    /* border: 2px solid #fff3bf;
    border-right: none;
    border-top-right-radius: -20px; */
    /* background-image: url("../../../src/assets/VectorActive.svg"); */
    background: linear-gradient(
      90deg,
      rgba(28, 84, 141, 0.6) 80%,

      transparent 100%
    );

    transition: border 450ms cubic-bezier(0.4, 0, 0.2, 1);
    /* z-index: 10;
    background-size: contain; */
    /* opacity: 0.5; */
    /* background-repeat: no-repeat;
    background-position: right center; */

    svg {
      /* fill: #fff3bf; */
      stroke: #fff3bf;
    }
  }

  &:hover {
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.6) inset; */

    svg {
      stroke: #fff3bf;
      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &:active:hover {
    color: #000;
  }
`;

export const SubMenuLink = styled(NavLink)`
  color: ${colors.mainFontColor};
  display: flex;
  font-size: 20px;

  align-items: center;

  line-height: calc(24.2 / 20);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  border-right: 2px solid #fff3bf;
  padding-top: 9px;
  padding-bottom: 18px;
  svg {
    margin-right: 10px;
  }

  &.active {
    color: #000;

    transition: color 450ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      stroke: #fff3bf;
      transition: stroke 450ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;

export const CustomSVG = styled.svg`
  /* Add styles for your custom SVG here */
`;

export const SvgStyled = styled.svg`
  fill: ${(props) => props.fillColor ?? "black"};
  stroke: ${(props) => props.strokeColor ?? "none"};
`;
