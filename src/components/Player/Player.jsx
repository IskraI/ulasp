/* eslint-disable react/prop-types */
import { PlayerWrapper } from "./Player.styled";

const Player = ({ display }) => {
  return (
    <>
      <PlayerWrapper style={{ display }}>Тут будет плеер</PlayerWrapper>
    </>
  );
};

export default Player;
