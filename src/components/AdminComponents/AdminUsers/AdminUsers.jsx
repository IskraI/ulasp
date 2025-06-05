import { useState, useEffect } from 'react';
import { Modal } from '../../Modal/Modal';
import {
  SearchInputWrapper,
  UsersContainer,
  Link
} from '../SearchUsers/SearchUsers.styled';
import { SectionUser } from '../UserForm/UserCreateForm.styled';
import { Button } from '../../Button/Button';
import { Title } from '../AdminCabinetPage/AdminCabinetPage.styled';
import UserCreateForm from '../UserForm/UserCreateForm';
import symbol from '../../../assets/symbol.svg';
import { Outlet, useLocation } from 'react-router-dom';

const AdminUsers = () => {
  const [showModal, setShowModal] = useState(false);
  const [section, setSection] = useState('User');
  const location = useLocation();

  useEffect(() => {
    // Извлекаем часть пути из текущего URL
    const path = location.pathname.split('/').pop();

    // Устанавливаем начальное значение section в зависимости от части пути
    if (path === 'allusers') {
      setSection('User');
    } else if (path === 'editors') {
      setSection('MusicEditor');
    }
  }, [location.pathname]);

  const handleShowModal = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setShowModal(false);
  };

  return (
    <>
      <UsersContainer>
        <Title>Користувачі</Title>

        <Button
          showIcon={true}
          icon={`${symbol}#icon-plus`}
          type="button"
          padding={'12px 46px'}
          onClick={handleShowModal}
          marginright={'24px'}
          marginleft={'auto'}
          text={'Додати'}
          ariaLabel={'Додати користувача'}
        ></Button>
        <SearchInputWrapper />
      </UsersContainer>
      <SectionUser>
        <Link
          to="allusers"
          activeclassname={section === 'User' ? 'active' : ''}
          onClick={() => setSection('User')}
        >
          Усі користувачі
        </Link>
        <Link
          to="editors"
          activeclassname={section === 'MusicEditor' ? 'active' : ''}
          onClick={() => {
            setSection('MusicEditor');
          }}
        >
          Музичні редактори та адміністратори
        </Link>
      </SectionUser>
      <Outlet />

      {showModal && (
        <Modal
          width={'898px'}
          padding={'24px'}
          onClose={handleCloseModal}
          showCloseButton={true}
        >
          <UserCreateForm onCloseModal={handleCloseModal} section={section} />
        </Modal>
      )}
    </>
  );
};

export default AdminUsers;
