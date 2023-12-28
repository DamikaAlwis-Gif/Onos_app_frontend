import React from 'react';
import { useState } from 'react';
import Button from "@mui/material/Button";
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

const QueueList = () => {
  const [switchName, setSwitchName] = useState("switch1");
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/add');
  }
  return (
    <div>
      {/* <div className=".switch-name">
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
          }}
        >
          OVS switch : {switchName}
        </p>
      </div> */}

      <div className="container mt-5">
        <div className="row">
          <div style={{ marginBottom: "10px" }}>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleAdd}
            >
              Add new queue
            </Button>
          </div>
          {/* <div className="col">
            <table className="table table-light  table-hover table-responsive">
              <thead>
                <tr>
                  <th>Queue ID</th>
                  <th>Queue Type</th>
                  <th>Max Rate</th>
                  <th>Min Rate</th>
                  <th>Priority</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>linux-htb</td>
                  <td>10000000</td>
                  <td>10000000</td>
                  <td>1</td>
                  <td>default</td>
                  <td>
                    
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>linux-htb</td>
                  <td>10000000</td>
                  <td>10000000</td>
                  <td>1</td>
                  <td>default</td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Queue ID</TableCell>
                    <TableCell>Queue Type</TableCell>
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
                    <TableCell>linux-htb</TableCell>
                    <TableCell>10000000</TableCell>
                    <TableCell>10000000</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>default</TableCell>
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
                    <TableCell>linux-htb</TableCell>
                    <TableCell>10000000</TableCell>
                    <TableCell>10000000</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>default</TableCell>
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