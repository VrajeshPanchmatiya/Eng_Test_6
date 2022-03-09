import {
  Box,
  Modal,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaginationAction } from "../redux/ScrollPaginationAction";
const ScrollPaginaton = () => {
  const [id, setId] = useState(0);
  const [page, setPage] = useState(0);
  const [rowData, setRowData] = useState({});
  const dispatch = useDispatch();
  const [serch, setSerch] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const info = useSelector((state: any) => {
    return state.pageInfo;
  });
  console.log(info);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPaginationAction(id));
      setId(id + 1);
    }, 10000);
    return () => {
      clearTimeout();
    };
  }, [id, dispatch]);
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const DisplayData = (item: any) => {
    console.log(item);
    setOpen(true);
    setRowData(JSON.stringify(item));
  };
  const handleSearch = (e: any) => {
    setSerch(e.target.value);
  };

  return (
    <div>
      <h1>Pagination With Scroll</h1>

      <TextField placeholder="Search Box" onChange={handleSearch} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info
              .slice(page * 20, page * 20 + 20)
              .filter(
                ({ title, created_at }: { title: any; created_at: any }) =>
                  title.includes(serch) || created_at.includes(serch)
              )
              .map((row: any) => (
                <TableRow
                  key={Math.random()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => DisplayData(row)}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.created_at}
                  </TableCell>
                  <TableCell>{row.author}</TableCell>
                  <TableCell>{row.url}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <Pagination
            count={info.length / 20}
            page={page}
            onChange={(e, page) => handleChange(e, page)}
            shape="rounded"
          />
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Row Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {rowData}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default ScrollPaginaton;
