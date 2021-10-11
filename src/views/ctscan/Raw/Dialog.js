import React from 'react';
import PropTypes from 'prop-types';
import {
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
import { IconChecks } from '@tabler/icons';

const RawCTScanPageDialog = (props) => {
  const { open, onClose, scanSelected, deidStatus } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontSize: 17, paddingLeft: '30px' }}>
        De-identify selected raw DICOM scans
      </DialogTitle>
      <TableContainer
        component={Paper}
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
        }}
      >
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
                  {deidStatus[scan.id] ? (
                    <IconChecks />
                  ) : (
                    <CircularProgress size="1rem" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
};

export default RawCTScanPageDialog;

RawCTScanPageDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  scanSelected: PropTypes.array.isRequired,
  deidStatus: PropTypes.object.isRequired,
};
