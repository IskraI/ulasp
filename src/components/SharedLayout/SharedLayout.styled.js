import styled from '@emotion/styled';
import { sizes } from '../../styles/vars';

export const ContainerWrraper = styled.div`
  display: flex;
  margin-top: ${sizes.header.height};
  min-height: calc(100dvh - ${sizes.header.height} - ${sizes.footer.height});
  height: calc(100% - (${sizes.header.height} + ${sizes.footer.height}));
`;
