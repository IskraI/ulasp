import  { useEffect, useState } from 'react';
import { useGetAllGenresForUserQuery } from '../../redux/genersUserSlice';
import { Loader } from '../Loader/Loader';
import  {StyledDropDown, Select, Option} from  './DropDownGeners.styled'


const DropDownGeners = ({ currentGenreId }) => {
  const { data: genres, error, isLoading } = useGetAllGenresForUserQuery();
    const [selectedGenre, setSelectedGenre] = useState('');
    

   useEffect(() => {
   
    if (error) {
      console.error('Ошибка при получении жанров:', error);
    }
   
    if (genres) {
      console.log('Список жанров:', genres);

     
      const userGenre = genres.find(genre => genre.id === currentGenreId);

    
      if (userGenre) {
        setSelectedGenre(userGenre.id);
      }
    }
  }, [genres, error,currentGenreId]); 

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div>
      {error ? (
        <div>Произошла ошибка при загрузке жанров</div>
      ) : (
        <StyledDropDown>
            <Select id="genreSelect" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
              {genres && genres.map(genre => (
              <Option key={genre.id} value={genre.id}>
                {genre.genre}
              </Option>
            ))}
          </Select>
        </StyledDropDown>
      )}
    </div>
  );
};

export default DropDownGeners;