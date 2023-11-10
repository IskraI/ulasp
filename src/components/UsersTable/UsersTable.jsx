import {
   Table,
  TableRow,
  TableCell,
  RowTitle,
  DetailsBtn
 } from "../SearchUsers/SearchUsers.styled";
 import {Button} from "../Button/Button"
const UsersTable = ({ users,  visibleColumns}) => {

  const formatDate = (dateString) => {
    const year = dateString.getFullYear();
            const month = String(dateString.getMonth() + 1).padStart(2, "0");
            const day = String(dateString.getDate()).padStart(2, "0");
           return `${year}/${month}/${day}`;
  };


      return (
    <>
      <Table>
      <thead>
        <TableRow>
          {visibleColumns.map((column, columnIndex) => (
            <RowTitle key={column.key} isFirstColumn={columnIndex === 0}>{column.label}</RowTitle>
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
                // column.type === 'date'
                //   ? formatDate(user[column.key])
                //   : 
                column.type === 'name'
                ? user.name? user.name : user.firstName +" "+user.lastName 
                  : column.type === 'link'
                  
                  ? <DetailsBtn  type="button" onClick ={()=>{console.log("DetailsBtn")}}>картка</DetailsBtn>
                  :column.key === 'boolean'
                  ? user[column.key]
                  :column.key === 'sendEmail'
                  ? <Button type="button" text= "Відправити" padding = "8px" onClick ={()=>console.log("send email")}></Button>
                  : user[column.key]}
                  </TableCell>
            ))}

            
            </TableRow>
          )})}
        </tbody>
      </Table>
    </>
  );
};

export default UsersTable;
