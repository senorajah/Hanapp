import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(uid, name, email, password, role, createdat) {
  return { uid, name, email, password, role, createdat };
}

const rows = [
  createData("1", "Uchiha, Madara", "madara@gmail.com", "143uchiha$", "Employer", "2022-05-22"),
  createData("2", "Uzumaki,Naruto ", "hokage123@gmail.com", "Hok4g31sl1f3", "Student", "2022-07-16"),
  createData("3", "Hyuga, Hinata", "iluvnaruto22@gmail.com", "Iluvnaruto#1", "Student", "2022-10-04"),
  createData("4", "Uchiha, Sasuke", "iluvnaruto1000@gmail.com", "Iluvnaruto-1", "Employer", "2022-10-05"),
];


// const makeStyle=(status)=>{
//   if(status === 'Approved')
//   {
//     return {
//       background: 'rgb(145 254 159 / 47%)',
//       color: 'green',
//     }
//   }
//   else if(status === 'Pending')
//   {
//     return{
//       background: '#ffadad8f',
//       color: 'red',
//     }
//   }
//   else{
//     return{
//       background: '#59bfff',
//       color: 'white',
//     }
//   }
// }

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recently registered</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        className="TblContainer">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Password</TableCell>
                <TableCell align="left">Role</TableCell>
                <TableCell align="left">Date created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.uid}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.password}</TableCell>
                  <TableCell align="left">{row.role}</TableCell>
                  <TableCell align="left">{row.createdat}</TableCell>
                  {/* <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell> */}
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
