import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SiTicktick } from "react-icons/si";
import { MdOutlineBlock } from "react-icons/md";
import useGetAllRequests from "../../hooks/requests/useGetAllRequests";
import Loading from "../Loading";

export default function RequestTable() {
  const { loading, requests, refetch } = useGetAllRequests({ search: "" });
  return loading ? (
    <Loading />
  ) : (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
              <TableCell
                sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
              >
                User Name
              </TableCell>
              <TableCell
                sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
              >
                Mobile
              </TableCell>
              <TableCell
                sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
              >
                Service
              </TableCell>
              <TableCell
                sx={{ width: "25%", textAlign: "center", fontWeight: "bold" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((row, index) => (
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
                  {row.mobile}
                </TableCell>
                <TableCell sx={{ width: "25%", textAlign: "center" }}>
                  {row.service}
                </TableCell>
                <TableCell sx={{ width: "25%", textAlign: "center" }}>
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex gap-2 items-center px-4 py-2 bg-[#a7f8da] border border-[#1D9112] rounded-xl text-[#1D9112]">
                      <p>
                        <SiTicktick />
                      </p>
                      <p>Accept</p>
                    </button>
                    <button className="flex gap-2 items-center px-4 py-2 bg-[#fde5ec] border border-[#A70909] rounded-xl text-[#A70909]">
                      <p>
                        <MdOutlineBlock />
                      </p>
                      <p>Decline</p>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
