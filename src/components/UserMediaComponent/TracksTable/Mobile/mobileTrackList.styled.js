import styled from '@emotion/styled';
import { media } from '../../../../styles/vars';

export const SongMobileContainer = styled.div`
  ${media.laptop} {
    display: none;
  }
`;

export const SongListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export const SongRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;

  transition: background 0.2s;

  &:nth-of-type(even) {
    background-color: rgba(234, 234, 234, 0.32);
  }

  border-radius: 10px;

  border: ${({ isPlayingTrack }) => {
    if (isPlayingTrack) {
      return '2px solid green';
    }
  }};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CoverImage = styled.img`
  border-radius: 10%;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Artist = styled.span`
  font-size: 14px;
  color: #666;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Duration = styled.span`
  font-size: 14px;
`;

export const MenuButton = styled.div``;
