import  { useEffect, useState } from 'react';
import { useGetAllGenresForUserQuery } from '../../redux/genersUserSlice';
import { Loader } from '../Loader/Loader';
import  {StyledDropDown, Select, Option} from  './DropDownGeners.styled'


const DropDownGeners = ({ currentGenreId }) => {
  const { data: genres, error, isLoading } = useGetAllGenresForUserQuery();
    const [selectedGenre, setSelectedGenre] = useState('');
 
    const datasort=(genres, _id, currentGenreId) => {
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

  console.log('currentGenreId', currentGenreId)


  return (
    <div>
      {error ? (
        <div>Произошла ошибка при загрузке жанров</div>
      ) : (
        <StyledDropDown>
            <Select id="genreSelect" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
              {genres && datasort(genres, genres._id, currentGenreId).map(genre => (
              <Option key={genre._id} value={genre._id}>
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