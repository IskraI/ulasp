import { useEffect, useState } from "react";
import { useGetAllGenresForUserQuery } from "../../redux/genersUserSlice";
import { useGetTracksByGenreIdQuery } from "../../redux/tracksUserSlice";
import { Loader } from "../Loader/Loader";
import { StyledDropDown, Select, Option } from "./DropDownGeners.styled";
import { useNavigate } from "react-router-dom";
import symbol from "../../assets/symbol.svg";

const DropDownTracksInGenres = ({ currentGenreId }) => {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("");
  const { data: genres, error, isLoading } = useGetAllGenresForUserQuery();
  // const { data: tracksData, error: tracksError, isLoading: tracksLoading } = useGetTracksByGenreIdQuery(currentGenreId);
  console.log("currentGenreId DropDownTracksInGenres:>> ", currentGenreId);
  const datasort = (genres, currentGenreId) => {
    const sortedArr = [];
    const remainingArr = [];

    genres.forEach((item) => {
      if (item._id === currentGenreId) {
        sortedArr.push(item);
      } else {
        remainingArr.push(item);
      }
    });

    return sortedArr.concat(remainingArr);
  };

  useEffect(() => {
    if (error) {
      console.error("Ошибка при получении жанров:", error);
    }

    if (genres) {
      const userGenre = genres.find((genre) => genre._id === currentGenreId);

      if (userGenre) {
        setSelectedGenre(userGenre._id);
      }
    }
  }, [genres, error, currentGenreId]);

  if (isLoading) {
    return <Loader />;
  }

  const handleChange = (e) => {
    const selectedGenreId = e.target.value;
    navigate(`/user/medialibrary/genres/${selectedGenreId}/tracks`);
  };

  return (
    <div>
      {error ? (
        <div>Произошла ошибка при загрузке жанров</div>
      ) : (
        <StyledDropDown>
          <Select
            id="genreSelect"
            value={selectedGenre}
            onChange={handleChange}
          >
            {genres &&
              datasort(genres, currentGenreId).map((genre) => (
                <Option key={genre._id} value={genre._id}>
                  {genre.genre}
                </Option>
              ))}
          </Select>
        </StyledDropDown>
      )}
      {/* {tracksLoading && <Loader />} 
      {tracksError && <div>Error loading tracks: {tracksError}</div>} 
      {tracksData && (
        <div>
            {tracksData.map((track) => (
            <div key={track._id}>
                {track.name}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default DropDownTracksInGenres;
