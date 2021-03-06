import React, { useState } from 'react';
import useSWR from 'swr';

// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@material-ui/core';

// project imports
import config from 'config';
import apiFetcher from 'services/apiFetcher';
import MainCard from 'ui-component/cards/MainCard';
import Loader from 'ui-component/Loader';
import { deidentifyScan } from 'services/api';
import RawCTScanPageDialog from './Dialog';

//= =============================|| RAW CT SCAN PAGE ||==============================//

const RawCTScanPage = () => {
  const [scanSelected, setScanSelected] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deidStatus, setDeidStatus] = useState({});

  const { data } = useSWR(config.apiEndpoints.raw, apiFetcher);
  if (!data) return <Loader />;

  const columns = [
    { field: 'id', width: 100, headerName: 'ID' },
    {
      field: 'project',
      headerName: 'Project',
      width: 170,
    },
    {
      field: 'pid',
      headerName: 'PID',
      width: 170,
    },
    {
      field: 'acquisition_date',
      headerName: 'Acquisition Date',
      width: 200,
    },
    {
      field: 'processed_by',
      headerName: 'Processed By',
      width: 170,
    },
  ];

  function constructRowsFromData(ctScanList) {
    let count = 1;

    ctScanList.forEach((ctScan) => {
      ctScan.id = count;
      count += 1;
    });

    return ctScanList;
  }

  function updateScanSelected(scanIndexes) {
    const dataSelected = [];
    scanIndexes.forEach((scanIndex) => dataSelected.push(data[scanIndex - 1]));
    setScanSelected(dataSelected);
  }

  function buildInitialDeidStatus() {
    const newDeidStatus = {};
    scanSelected.forEach((scan) => {
      newDeidStatus[scan.id] = false;
    });
    setDeidStatus(newDeidStatus);
  }

  function updateDeidStatus(scanID) {
    setDeidStatus((prevState) => ({ ...prevState, [scanID]: true }));
  }

  const rows = constructRowsFromData(data);

  const deIdentifySelectedCTScans = () => {
    buildInitialDeidStatus();
    setOpenDialog(true);
    scanSelected.forEach((scan) => {
      deidentifyScan(scan).then(() => {
        updateDeidStatus(scan.id);
      });
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <MainCard title="Raw CT Scan List" style={{ width: 950 }}>
        <Typography variant="body2">
          These are the raw CT scan data available.
        </Typography>
      </MainCard>
      <div
        style={{
          marginTop: '2vh',
          maxHeight: 700,
          width: 950,
          background: 'white',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
          onSelectionModelChange={(scanIndexes) => {
            updateScanSelected(scanIndexes);
          }}
        />
      </div>
      <div>
        <Button onClick={deIdentifySelectedCTScans}>
          De-identify Selected CT Scans
        </Button>
        <RawCTScanPageDialog
          open={openDialog}
          onClose={handleCloseDialog}
          scanSelected={scanSelected}
          deidStatus={deidStatus}
        />
      </div>
    </div>
  );
};

export default RawCTScanPage;
