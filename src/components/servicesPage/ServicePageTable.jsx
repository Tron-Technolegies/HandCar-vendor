import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function createData(name, category, price) {
  return { name, category, price };
}

const rows = [
  createData("Tom Cruise", "Painting", "$ 21.00"),
  createData("Tom Cruise", "Painting", "$ 21.00"),
  createData("Tom Cruise", "Painting", "$ 21.00"),
  createData("Tom Cruise", "Painting", "$ 21.00"),
  createData("Tom Cruise", "Painting", "$ 21.00"),
  createData("Tom Cruise", "Painting", "$ 21.00"),
];

export default function ServicePageTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Service Name
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Category
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ width: "25%", textAlign: "center" }}
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.category}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                {row.price}
              </TableCell>
              <TableCell sx={{ width: "25%", textAlign: "center" }}>
                <div className="flex gap-5 justify-center text-xl text-[#ABABAB]">
                  <Link to={"/services/1/edit"}>
                    <FaRegEdit />
                  </Link>
                  <button>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
