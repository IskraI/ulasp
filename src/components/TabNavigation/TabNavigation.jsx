import { useLocation } from 'react-router-dom';
import { PathText } from './TabNavigation.styled';

export const TabNavigation = () => {
     const location = useLocation();
  const currentPath = location.pathname;
  const pathSegments = currentPath.split('/').filter(segment => segment !== '');

  // Индекс стартового сегмента (например, admin)
  const startIndex = pathSegments.indexOf('admin') !== -1 ? pathSegments.indexOf('admin') : 0;
 
  // Маппинг для перевода сегментов пути на украинский
  const segmentToUkrainianMapping = {
    users: 'Користувачі',
    carduser: 'Картка користувача',
    // Добавьте другие сегменты и их соответствующие переводы
  };

  const getTranslatedPath = () => {
    if (startIndex !== -1 && startIndex < pathSegments.length - 1) {
      const translatedSegments = pathSegments
        .slice(startIndex + 1) // Обрезаем путь, начиная с сегмента после стартового
        .map(segment => segmentToUkrainianMapping[segment] || segment); // Преобразуем каждый сегмент пути в украинский

      return translatedSegments.join('/');
    } else {
      return '';
    }
  };

  return (
    <>
      <PathText>{getTranslatedPath()}</PathText>
    </>
  );
};

export default TabNavigation









