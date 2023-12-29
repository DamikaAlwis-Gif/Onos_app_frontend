import React from 'react';
import { useState } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import "./QueueList.css";
const QueueList = () => {
  const [switchName, setSwitchName] = useState("switch1");
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/add');
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div style={{ marginBottom: "10px" }}>
            {/* <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleAdd}
            >
              Add new queue
            </Button> */}
            <button className = "submit-button" onClick={handleAdd}>Add New Queue</button>
          </div>

          <div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Queue ID</TableCell>
                    {/* <TableCell>Queue Type</TableCell> */}
                    <TableCell>Max Rate</TableCell>
                    <TableCell>Min Rate</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    {/* <TableCell>linux-htb</TableCell> */}
                    <TableCell>10 Mbps</TableCell>
                    <TableCell>5 Mbps</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Voice Traffic</TableCell>
                    <TableCell>
                      {/* <Button
                        variant="contained"
                        color="error"
                        size="small"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button> */}
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    {/* <TableCell>linux-htb</TableCell> */}
                    <TableCell>20 Mbps</TableCell>
                    <TableCell>10 Mbps</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Video Traffic</TableCell>
                    <TableCell>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueList