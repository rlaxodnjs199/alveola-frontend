import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@material-ui/core';
// import { deidentifyScanSelected } from 'services/api';

const RawCTScanPageDialog = (props) => {
  const { open, onClose, scanSelected } = props;

  function parseData(scanSelected) {
    const scanSelectedArray = [];
    scanSelected.forEach((scan) => {
      console.log(Object.values(scan));
    });
    console.log(scanSelectedArray);
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>De-identify selected raw DICOM scans</DialogTitle>
      <TableContainer component={Paper}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Project</TableCell>
              <TableCell align="left">Participant ID</TableCell>
              <TableCell align="left">Acquisition Date</TableCell>
              <TableCell align="left">Worker</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scanSelected.map((scan) => (
              <TableRow
                key={scan.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {scan.id}
                </TableCell>
                <TableCell align="left">{scan.project}</TableCell>
                <TableCell align="left">{scan.participant_id}</TableCell>
                <TableCell align="left">{scan.acquisition_date}</TableCell>
                <TableCell align="left">{scan.worker}</TableCell>
                <TableCell align="left">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          parseData(scanSelected);
        }}
      >
        Click
      </Button>
    </Dialog>
  );
};

export default RawCTScanPageDialog;

RawCTScanPageDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  scanSelected: PropTypes.array.isRequired,
};
