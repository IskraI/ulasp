// /* eslint-disable react/prop-types */
// import {
//   TableCell,
//   RowTitle,
//   TrackCover,
//   TableStyle,
//   THeadStyle,
//   TrStyle,
//   LatestTracks,
//   TracksNotFound,
//   TracksTableWrapper,

// } from "./TracksTable.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL, ERROR_NOT_FOUND } from "../../../constants/constants";
// import symbol from "../../../assets/symbol.svg";
// import { Button } from "../../Button/Button";
// import { setPreloadSrcPlayer, stopPlay } from "../../../redux/playerSlice";
// import { getPlayerState } from "../../../redux/playerSelectors";

// const TracksTable = ({ rows, tracks, isLoading, error, display, title,  showTitle, marginTopWrapper, }) => {
//   const sToStr = (sec) => {
//     sec = Math.round(sec);
//     let m = Math.trunc(sec / 60) + "";
//     sec = (sec % 60) + "";
//     return m.padStart(2, 0) + ":" + sec.padStart(2, 0);
//   };

//   const dispatch = useDispatch();
//   const playerState = useSelector(getPlayerState);
//   const tracksTableProps = {
//     showTitle: showTitle ? "table-caption" : "none",
//     marginTop: marginTopWrapper ? `${marginTopWrapper}` : "auto",
//     showData: rows.map((rows) => (rows.showData ? true : false)),
//   };

//   const isLoadedTracks = playerState.isLoaded;

//   const playMusic = () => {
//     const trackURL = tracks.map((track) => {
//       const newObject = {
//         trackURL: track.trackURL,
//         artist: track.artist,
//         trackName: track.trackName,
//       };
//       return newObject;
//     });

//     dispatch(setPreloadSrcPlayer(trackURL));
//   };

//   const stopMusic = () => {
//     dispatch(stopPlay());
//   };

//   return (
//     <>
//       {error && <TracksNotFound>{ERROR_NOT_FOUND}</TracksNotFound>}
//       {isSuccess && tracks?.length === 0 && !isLoading && !error && (
//         <TracksNotFound>Музика ще не завантажена</TracksNotFound>
//       )}

//       {tracks?.length !== 0 && !isLoading && !error && (
//         <>
//           <Button
//             onClick={() => (!isLoadedTracks ? playMusic() : stopMusic())}
//             type={"button"}
//             width={"250px"}
//             height={"50px"}
//             padding={"16px"}
//             margintop={"12px"}
//             text={isLoadedTracks ? "Зупинити" : "Грати музику"}
//             showIcon={"true"}
//             // icon={`${symbol}#icon-play`}
//             icon={
//               isLoadedTracks
//                 ? `${symbol}#icon-stop-play`
//                 : `${symbol}#icon-play`
//             }
//           />
//            <TracksTableWrapper marginTop={tracksTableProps.marginTop}>
//             <LatestTracks showTitle={tracksTableProps.showTitle}>{title}</LatestTracks>
//             <TableStyle>
//               <THeadStyle>
//                 <tr>
//                   {rows.map((row, rowindex) => {
//                     return <RowTitle key={rowindex}>{row}</RowTitle>;
//                   })}
//                 </tr>
//               </THeadStyle>
//               <tbody>
//                 {tracks.map(
//                   ({
//                     _id,
//                     trackPictureURL,
//                     trackName,
//                     artist,
//                     trackDuration,
//                     trackGenre,
//                     playList,
//                   }) => {
//                     return (
//                       <TrStyle key={_id}>
//                         <TableCell>
//                           <TrackCover
//                             src={BASE_URL + "/" + trackPictureURL}
//                             alt={trackName}
//                             width={55}
//                           />
//                         </TableCell>

//                         <TableCell>{trackName}</TableCell>
//                         <TableCell>{artist}</TableCell>
//                         <TableCell>{sToStr(trackDuration)}</TableCell>
//                         <TableCell>{trackGenre}</TableCell>

//                         <TableCell style={{ display }}>
//                           {playList?.playListName}
//                         </TableCell>
//                         <TableCell style={{ display }}><svg width="24" height="24" stroke="#888889">
//                           <use href={`${symbol}#icon-dots`}></use>
//                         </svg></TableCell>
//                       </TrStyle>
//                     );
//                   }
//                 )}
//               </tbody>
//             </TableStyle>
//           </TracksTableWrapper>
//      </>
//       )}
//     </>
//   );
// };

// export default TracksTable;
