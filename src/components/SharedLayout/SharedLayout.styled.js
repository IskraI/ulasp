import styled from "@emotion/styled";
import { sizes } from "../../styles/SharedStyles";

export const Container = styled.div`
  /* min-height: calc(100vh); */
  /* margin: auto; */
`;

export const ContainerWrraper = styled.div`
  /* max-height: 100vh; */
  min-height: calc(100vh - (${sizes.header.height} + ${sizes.footer.height}));

  display: flex;
  flex-direction: column;
  /* margin: auto; */
`;
