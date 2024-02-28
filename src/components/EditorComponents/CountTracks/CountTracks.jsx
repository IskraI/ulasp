import PropTypes from "prop-types";
import { DivWrapper, CountTracksStyled } from "./CountTracks.styled";
import { getNoun } from "../../../helpers/helpers";

const CountTracks = ({ countTracks, fontSize }) => {
  const declWord = getNoun(countTracks, "пісня", "пісні", "пісень");

  return (
    <DivWrapper>
      <CountTracksStyled fontSize={fontSize}>
        {countTracks + `${" "}` + declWord}
      </CountTracksStyled>
    </DivWrapper>
  );
};

CountTracks.propTypes = {
  countTracks: PropTypes.number,
  fontSize: PropTypes.string,
};

export default CountTracks;
