import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import {
  Table,
  TableRow,
  TableCell,
  RowTitle,
  WrapperTablePagination
} from '../SearchUsers/SearchUsers.styled';
import { Button } from '../../Button/Button';
import {
  useUnblockUserByIdMutation,
  useAccessUserUpdateByIdMutation,
  useSendMailUserByIdMutation
} from '../../../redux/dataUsersSlice';

import { ButtonSwitch } from '../ButtonSwitch/ButtonSwitch';
import { Modal } from '../../Modal/Modal';
import { TextModal } from '../../Modal/Modal.styled';
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const UsersTable = ({ users, visibleColumns, isSearching = false }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const handleShowModal = (modalContent) => {
    setActiveModal(modalContent);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setActiveModal(null);
  };

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };
  const formatDate = (dateString) => {
    const originalDate = new Date('2023-11-10T14:58:20.594Z');

    const day = String(originalDate.getDate()).padStart(2, '0');
    const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = originalDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };
  const navigate = useNavigate();
  const [dispatchUnblock, { isLoading: isLoadingUnblock }] =
    useUnblockUserByIdMutation();
  const [dispatchAccess, { isLoading: isLoadingAccess }] =
    useAccessUserUpdateByIdMutation();
  const [dispatchSendMail, { isLoading: isLoadingSendMail }] =
    useSendMailUserByIdMutation();
  const handleSend = async (id) => {
    // console.log("меняем доступ и отправляем письмо");
    try {
      const [unblockResult, accessResult] = await Promise.all([
        dispatchUnblock(id).unwrap(),
        dispatchAccess(id).unwrap()
      ]);

      // Если обе операции успешны, выполнить отправку письма
      await dispatchSendMail(id)
        .unwrap()
        .then(() => {
          setActiveModal('sendMail');
        })
        .catch((error) => alert(error.data.message));

      // Перейти на страницу пользователей
      // navigate("/admin/users");
    } catch (error) {
      alert(error.data.message);
    }
  };

  const [currentPage, setCurrentPage] = useState(
    () => localStorage.getItem('userPage') || 1
  );

  useEffect(() => {
    if (!isSearching) return;
    if (isSearching) {
      setCurrentPage(1);
    }
  }, [isSearching]);

  const itemsPerPage = 10; // Количество элементов на странице
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    localStorage.setItem('userPage', newPage);
  };
  // console.log("users.length :>> ", users);
  return (
    <>
      <WrapperTablePagination>
        <Table>
          <thead>
            <TableRow>
              {visibleColumns.map((column, columnIndex, array) => (
                <RowTitle
                  key={column.key}
                  isFirstColumn={columnIndex === 0}
                  isLastColumn={columnIndex === array.length - 1}
                >
                  {column.label}
                </RowTitle>
              ))}
            </TableRow>
          </thead>

          <tbody>
            {currentItems.map((user, index) => {
              {
                // console.log('users', user._id, user.access);
              }
              return (
                <TableRow
                  key={user._id}
                  className={index === hoveredRow ? 'hovered' : ''}
                >
                  {visibleColumns.map((column, columnIndex, array) => (
                    <TableCell
                      key={column.key}
                      isFirstColumn={columnIndex === 0}
                      isLastColumn={columnIndex === array.length - 1}
                    >
                      {column.type === 'date' ? (
                        formatDate(user[column.key])
                      ) : column.type === 'name' ? (
                        user.name ? (
                          user.name
                        ) : (
                          capitalize(user.firstName) +
                          ' ' +
                          capitalize(user.lastName)
                        )
                      ) : column.type === 'listens' ? (
                        <div>{user.listenCount}</div>
                      ) : column.type === 'nameLink' ? (
                        user.name ? (
                          <Link
                            to={`/admin/users/carduser/${user._id}`}
                            onMouseEnter={() => handleRowHover(index)}
                            onMouseLeave={() => handleRowHover(null)}
                          >
                            {`${capitalize(user.name)} ${
                              user.userFop === 'tov' && 'ТОВ'
                            }`}
                          </Link>
                        ) : (
                          <Link
                            to={`/admin/users/carduser/${user._id}`}
                            onMouseEnter={() => handleRowHover(index)}
                            onMouseLeave={() => handleRowHover(null)}
                          >
                            {`${capitalize(user.firstName)} ${capitalize(
                              user.lastName
                            )} ${user.userFop === 'fop' && 'ФОП'}`}
                          </Link>
                        )
                      ) : column.type === 'link' ? (
                        <Link
                          to={`/admin/users/carduser/${user._id}`}
                          onMouseEnter={() => handleRowHover(index)}
                          onMouseLeave={() => handleRowHover(null)}
                        >
                          картка
                        </Link>
                      ) : column.type === 'nameLinkEditor' ? (
                        <Link
                          to={`/admin/users/cardeditor/${user._id}`}
                          onMouseEnter={() => handleRowHover(index)}
                          onMouseLeave={() => handleRowHover(null)}
                        >
                          {`${user.firstName} ${user.lastName}`}
                        </Link>
                      ) : column.type === 'typeEditor' ? (
                        <>
                          {user.editorRole
                            ? 'Музичний редактор'
                            : 'Адміністратор'}{' '}
                        </>
                      ) : column.key === 'access' ? (
                        <ButtonSwitch
                          isTrue={user[column.key]}
                          idUser={user._id}
                        />
                      ) : column.key === 'status' ? (
                        <>
                          {user[column.key] === true
                            ? 'Відкрито'
                            : 'Заблоковано'}
                        </>
                      ) : column.key === 'sendEmail' ? (
                        <Button
                          border={'1px solid rgb(23 22 28 / 50%) '}
                          type="button"
                          text="Відправити"
                          padding="8px"
                          fontsize="14px"
                          onClick={() => handleSend(user._id)}
                        ></Button>
                      ) : (
                        user[column.key]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </tbody>
        </Table>
        {users.length > 10 && (
          <div
            style={{
              display: 'flex',
              marginLeft: 'auto',
              alignItems: 'center'
            }}
          >
            {/* <SelectPageSize
            pageSize={pageSize}
            onChange={onPageSizeChange}
            totalPages={totalPages}
            optionValue={[10, 20, 50, 100]}
          /> */}

            <Pagination
              style={{ marginBottom: '12px' }}
              defaultCurrent={1}
              current={currentPage}
              total={users.length}
              showLessItems
              showSizeChanger={false}
              defaultPageSize={itemsPerPage}
              pageSize={itemsPerPage}
              hideOnSinglePage
              onChange={(page) => handlePageChange(page)}
              // locale={localeUA}
              showTitle
            />
          </div>
        )}
      </WrapperTablePagination>
      {activeModal === 'sendMail' && (
        <Modal
          width={'664px'}
          padding={'38px 38px '}
          onClose={handleCloseModal}
          showCloseButton={true}
          flexDirection="column"
        >
          <TextModal>
            Лист з даними доступу користувачу відправлено. Допуск та статус
            відкриті
          </TextModal>
        </Modal>
      )}
    </>
  );
};

export default UsersTable;
