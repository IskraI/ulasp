import { Link } from "react-router-dom";
import {
  Table,
  TableRow,
  TableCell,
  RowTitle,
  DetailsBtn,
} from "../SearchUsers/SearchUsers.styled";
import { Button } from "../Button/Button";

const UsersTable = ({ users, visibleColumns }) => {

  const formatDate = (dateString) => {
    const originalDate = new Date("2023-11-10T14:58:20.594Z");

    const day = String(originalDate.getDate()).padStart(2, "0");
    const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
    const year = originalDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  return (
    <>
      <Table>
        <thead>
          <TableRow>
            {visibleColumns.map((column, columnIndex) => (
              <RowTitle key={column.key} isFirstColumn={columnIndex === 0}>
                {column.label}
              </RowTitle>
            ))}
          </TableRow>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <TableRow key={index}>
                {visibleColumns.map((column, columnIndex) => (
                  <TableCell key={column.key} isFirstColumn={columnIndex === 0}>
                    {
                      column.type === 'date'
                        ? formatDate(user[column.key])
                        :
                      column.type === "name" ? (
                        user.name ? (
                          user.name
                        ) : (
                          user.firstName + " " + user.lastName
                        )
                      ) : column.type === "link" ? (
                        <Link to="/admin/users/carduser">
                          <DetailsBtn type="link">картка</DetailsBtn>
                        </Link>
                      ) : column.key === "boolean" ? (
                        user[column.key]
                      ) : column.key === "sendEmail" ? (
                        <Button
                          type="button"
                          text="Відправити"
                          padding="8px"
                          onClick={() => console.log("send email")}
                        ></Button>
                      ) : (
                        user[column.key]
                      )
                    }
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
