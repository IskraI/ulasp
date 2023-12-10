import { Link } from "react-router-dom";
import {
  Table,
  TableRow,
  TableCell,
  RowTitle,
  Details,
} from "../SearchUsers/SearchUsers.styled";
import { Button } from "../../Button/Button";
import { useUnblockUserByIdMutation } from "../../../redux/dataUsersSlice";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonSwitch } from "../ButtonSwitch/ButtonSwitch";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const UsersTable = ({ users, visibleColumns, switchAccess }) => {
  const formatDate = (dateString) => {
    const originalDate = new Date("2023-11-10T14:58:20.594Z");

    const day = String(originalDate.getDate()).padStart(2, "0");
    const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const year = originalDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };
  const navigate = useNavigate();
  const [dispatchUnblock, { isLoading: isLoadingUnblock }] =
    useUnblockUserByIdMutation();

  const handleSend = async (id) => {
    console.log("ID:", id);
    dispatchUnblock(id)
      .unwrap()
      .then(() => {
        navigate("/admin/users");
      })
      .catch((error) => console.log(error.data.message));
  };

  return (
    <>
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
          {users.map((user, index) => {
            return (
              <TableRow key={index}>
                {visibleColumns.map((column, columnIndex, array) => (
                  <TableCell
                    key={column.key}
                    isFirstColumn={columnIndex === 0}
                    isLastColumn={columnIndex === array.length - 1}
                  >
                    {column.type === "date" ? (
                      formatDate(user[column.key])
                    ) : column.type === "name" ? (
                      user.name ? (
                        user.name
                      ) : (
                        capitalize(user.firstName) +
                        " " +
                        capitalize(user.lastName)
                      )
                    ) : column.type === "nameLink" ? (
                      user.name ? (
                        <Link to={`/admin/users/carduser/${user._id}`}>
                          {user.name}
                        </Link>
                      ) : (
                        <Link to={`/admin/users/carduser/${user._id}`}>
                          {`${capitalize(user.firstName)} ${capitalize(
                            user.lastName
                          )}`}
                        </Link>
                      )
                    ) : column.type === "link" ? (
                      <Link to={`/admin/users/carduser/${user._id}`}>
                        картка
                      </Link>
                    ) : column.type === "nameLinkEditor" ? (
                      <Link to={`/admin/users/cardeditor/${user._id}`}>
                        {`${user.firstName} ${user.lastName}`}
                      </Link>
                    ) : column.key === "access" ? (
                      <ButtonSwitch
                        isTrue={user[column.key]}
                        idUser={user._id}
                        onClick={() => switchAccess(user._id, user[column.key])}
                      />
                    ) : column.key === "status" ? (
                      <>
                        {user[column.key] === true ? "Відкрито" : "Заблоковано"}
                      </>
                    ) : column.key === "sendEmail" ? (
                      <Button
                        type="button"
                        text="Відправити"
                        padding="8px"
                        fontsize="14px"
                        onClick={() => handleSend(user._id)}
                        display="none"
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
    </>
  );
};

export default UsersTable;
