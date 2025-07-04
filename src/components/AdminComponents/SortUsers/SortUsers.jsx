import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// REDUX
import { useLazyGetUserListenCountQuery } from '../../../redux/statisticSlice';
import { dataUsersApi } from '../../../redux/dataUsersSlice';
import { useDispatch } from 'react-redux';
// END OF REDUX

import { Button } from '../../Button/Button';
import { SortWrapper, SortSelect, SortOption } from './SortUsers.styled';

const SortUsers = ({
  handleChange,
  data = [],
  field,
  showSortOptions = false,
  options = [
    {
      key: 1,
      value: 'default',
      title: 'default title',
      selected: true
    }
  ]
}) => {
  const dispatch = useDispatch();
  const [trigger] = useLazyGetUserListenCountQuery();

  const [sortOrder, setSortOrder] = useState(() => {
    return localStorage.getItem('userSortOrder') || 'defaultValue';
  });

  const location = useLocation();

  useEffect(() => {
    return () => {
      const path = location.pathname;

      const isAllowedPath =
        path === '/admin/users/allusers' ||
        path.startsWith('/admin/users/carduser/');

      if (!isAllowedPath) {
        localStorage.removeItem('userSortOrder');
        localStorage.removeItem('userPage');
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    const sorted = [...data];

    if (sortOrder === 'asc') {
      sorted.sort((a, b) => (a[field] || 0) - (b[field] || 0));
    } else if (sortOrder === 'desc') {
      sorted.sort((a, b) => (b[field] || 0) - (a[field] || 0));
    }

    handleChange(sorted);
  }, [sortOrder, data, field, handleChange]);

  const handleChangeSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    localStorage.setItem('userSortOrder', value);
  };

  return (
    <>
      {showSortOptions && (
        <SortWrapper>
          <label htmlFor="sortOrder">Сортування:</label>
          <SortSelect
            name="sortOrder"
            value={sortOrder}
            onChange={handleChangeSort}
          >
            {options.map(({ key, value, title }) => {
              return (
                <SortOption key={key} value={value}>
                  {title}
                </SortOption>
              );
            })}
          </SortSelect>
          <Button
            text={'Перерахувати прослуховування'}
            fontsize={'14px'}
            padding={'8px'}
            onClick={() => {
              trigger();
              dispatch(dataUsersApi.util.invalidateTags(['dataUsers']));
            }}
          />
        </SortWrapper>
      )}
    </>
  );
};

export default SortUsers;

SortUsers.propTypes = {
  data: PropTypes.array,
  field: PropTypes.string,
  handleChange: PropTypes.func,
  sortOrder: PropTypes.string,
  showSortOptions: PropTypes.bool,
  options: PropTypes.array
};
