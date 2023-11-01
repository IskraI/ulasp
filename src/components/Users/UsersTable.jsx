import React from "react";

 const UsersTable = ({ users }) => {
  return (<>
  <table>
      <thead>
        <tr>
         
          <th> Name</th>
        
               
         
        
          <th>Day of Birthday</th>
          <th>Tel Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
                     <td>{user.firstName}</td>
            <td>{user.lastName} {user.fatherName}</td>
                 
          
            <td>{user.dayOfBirthday}</td>
            <td>{user.telNumber}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
   
  );
};

export default UsersTable;


     
