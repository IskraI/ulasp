import styled from '@emotion/styled';
import AudioPlayer from 'react-h5-audio-player';
import { sizes, media } from '../../styles/vars';
import './player.css';
export const PlayerWrapper = styled.div`
  display: flex;
  justify-self: center;

  ${media.laptopMax} {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
  }

  ${media.laptop} {
    flex-direction: ${({ inHeader }) => (inHeader ? 'row-reverse' : 'column')};
    gap: ${({ inHeader }) => (inHeader ? '24px' : null)};
    padding: ${({ inHeader }) => (inHeader ? '4px' : '12px')};
    width: ${({ inHeader }) => (inHeader ? '80%' : '100%')};
    height: ${({ inHeader }) => (inHeader ? '80px' : '156px')};
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  /* outline: 1px solid orange; */
`;

export const TrackInfoWrapper = styled.div`
  /* width: 20%; */
  min-width: 20%;
  max-width: 20%;
  height: calc(${sizes.header.height} - 4px);
  display: ${({ inHeader }) => (inHeader ? 'flex' : 'block')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0px;
  overflow: hidden;

  /* outline: 1px solid red; */

  ${media.laptopMax} {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    padding-top: 2px;
    align-items: center;
    height: 100%;
    text-align: center;
  }
`;

// export const TracksArtist = styled.p`
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   font-size: ${({ inHeader }) => (inHeader ? '14px' : '16px')};
//   font-weight: ${({ inHeader }) => (inHeader ? '500' : '600')};
//   line-height: 1.21;
//   margin-bottom: ${({ inHeader }) => (inHeader ? '0' : '2px')};
//   padding: 6px 1px 2px 1px;
//   height: 50%;

//   word-break: break-all;
//   text-align: center;
//   cursor: help;

//   ${media.tabletMax} {
//     padding: 0 4px;
//     height: 100%;
//     text-align: center;
//   }
// `;

export const TracksArtist = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  margin: 0;
  padding: 0 4px;
  text-align: center;

  cursor: help;

  ${media.tabletMax} {
    font-size: 14px;
    padding: 0 2px;
  }

  ${media.laptop} {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: ${({ inHeader }) => (inHeader ? '14px' : '16px')};
    font-weight: ${({ inHeader }) => (inHeader ? '500' : '600')};

    margin-bottom: ${({ inHeader }) => (inHeader ? '0' : '2px')};
    padding: 6px 1px 2px 1px;
    height: 50%;

    word-break: break-all;
  }
`;

export const TrackName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;

  height: 100%;

  padding: 0 2px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;

  cursor: help;

  ${media.laptop} {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;

    word-break: break-all;
    font-size: ${({ inHeader }) => (inHeader ? '12px' : '14px')};

    padding: 4px 1px 2px 1px;
    height: calc(50% - 4px);
  }
`;

export const PlayerReact = styled(AudioPlayer)`
  padding-top: 0;
  width: 100%;
  height: 80%;
  justify-content: center;
`;

export const SvgLoop = styled.svg`
  margin: auto;
  fill: #000000;
`;

export const LoopBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  margin: 0;

  ${media.tablet} {
    margin-left: 24px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
