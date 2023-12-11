import { useLocation } from 'react-router-dom';
import { PathText, BackLink,PathContainer } from './TabNavigation.styled';
import symbol from "../../assets/symbol.svg";

export const TabNavigation = () => {
     const location = useLocation();
  const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    

  // Индекс стартового сегмента (например, admin)
//   const startIndex = pathSegments.indexOf('admin') !== -1 ? pathSegments.indexOf('admin') : 0;
  const startIndex = pathSegments[0] === 'admin' ? 1 : 0;
  // Маппинг для перевода сегментов пути на украинский
  const segmentToUkrainianMapping = {
    users: 'Користувачі',
    carduser: 'Картка користувача',
    medialibrary: 'Медіатека',
    newtracks: 'Нові пісні',
    user: ' ',
    genres: 'Жанри',
    newplaylists: 'Нові Плейлисти',
    // Добавьте другие сегменты и их соответствующие переводы
  };

//   const getTranslatedPath = () => {
//     if (startIndex !== -1 && startIndex < pathSegments.length - 1) {
//       const translatedSegments = pathSegments
//         .slice(startIndex + 1) // Обрезаем путь, начиная с сегмента после стартового
//         .map(segment => segmentToUkrainianMapping[segment] || segment); // Преобразуем каждый сегмент пути в украинский

//       return translatedSegments.join('/');
//     } else {
//       return '';
//     }
    //   };
    
//     const getTranslatedPath = () => {
//     if (startIndex !== -1 && startIndex < pathSegments.length) {
//         const lastSegment = pathSegments[pathSegments.length - 1];
        

//       const translatedSegments = pathSegments
//         .slice(startIndex, pathSegments.length - 1)
//         .map((segment, index) => (
//           <span key={index}>{segmentToUkrainianMapping[segment] || segment}/</span>
//         ));

//       // Последний видимый сегмент с подчеркиванием, без завершающего "/"
//       return (
//         <span key={pathSegments.length - 1}>
//           {translatedSegments}
//           <span style={{ textDecoration: 'underline' }}>
//             {segmentToUkrainianMapping[lastSegment] || lastSegment}
//           </span>
//         </span>
//       );
//     } else {
//       return '';
//     }
    //   };
    
// const getTranslatedPath = () => {
//   if (startIndex !== -1 && startIndex < pathSegments.length) {
//     const lastSegment = pathSegments[pathSegments.length - 1];

//     // Check if the last segment looks like an ID (e.g., 654e4398a036615f30dbe70b)
//     const isLastSegmentId = /^[a-f0-9]{24}$/i.test(lastSegment);

//     // Determine the index of the segment to underline
//     const indexOfSegmentToUnderline = isLastSegmentId ? pathSegments.length - 1 : pathSegments.length - 2;

//     // Render the translated segments
//     const translatedSegments = pathSegments
//       .slice(startIndex, pathSegments.length - (isLastSegmentId ? 1 : 0))
//       .map((segment, index) => (
//         <span
//           key={index}
//           style={{
//             textDecoration: index === indexOfSegmentToUnderline ? 'underline' : 'none',
//           }}
//         >
//           {segmentToUkrainianMapping[segment] || segment}
//           {index < pathSegments.length - (isLastSegmentId ? 2 : 1) ? '/' : ''}
//         </span>
//       ));

//     return (
//       <>
//         {translatedSegments}
//       </>
//     );
//   } else {
//     return '';
//   }
    // };
    
   const getTranslatedPath = () => {
  if (startIndex !== -1 && startIndex < pathSegments.length) {
    const lastSegment = pathSegments[pathSegments.length - 1];

    // Check if the last segment looks like an ID (e.g., 654e4398a036615f30dbe70b)
    const isLastSegmentId = /^[a-f0-9]{24}$/i.test(lastSegment);

    // Determine the index of the segment to underline
    const indexOfSegmentToUnderline = isLastSegmentId ? pathSegments.length - 1 : pathSegments.length - 2;

    // Render the translated segments
    const translatedSegments = pathSegments
      .slice(startIndex, pathSegments.length - (isLastSegmentId ? 1 : 0))
      .map((segment, index) => (
        <span
          key={index}
          style={{
            textDecoration: index === indexOfSegmentToUnderline ? 'underline' : 'none',
          }}
        >
          {index > 0 ? '/' : ''}{segmentToUkrainianMapping[segment] || segment}
        </span>
      ));

    return (
      <>
        {translatedSegments}
      </>
    );
  } else {
    return '';
  }
};

  return (
      <PathContainer>
       <BackLink to="../"> 
         <svg className="icon" width="24" height="24">
              <use href={`${symbol}#icon-arrow`} width="24" height="24" fill="#17161C"></use>
            </svg>
      </BackLink>   
      <PathText>{getTranslatedPath()}</PathText>
    </PathContainer>
  );
};

export default TabNavigation









