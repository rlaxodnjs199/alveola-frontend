import React from 'react';
import useSWR from 'swr';

// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@material-ui/core';

// project imports
import config from 'config';
import apiFetcher from 'services/apiFetcher';
import MainCard from 'ui-component/cards/MainCard';
import Loader from 'ui-component/Loader';

//= =============================|| RAW CT SCAN PAGE ||==============================//

const DeidCTScanPage = () => {
  const { data } = useSWR(config.apiEndpoints.deid, apiFetcher);
  if (!data) return <Loader />;

  const columns = [
    { field: 'id', width: 100, headerName: 'ID' },
    {
      field: 'project',
      headerName: 'Project',
      width: 170,
    },
    {
      field: 'participant_id',
      headerName: 'Participant ID',
      width: 170,
    },
    {
      field: 'acquisition_date',
      headerName: 'Acquisition Date',
      width: 200,
    },
    {
      field: 'worker',
      headerName: 'Worker',
      width: 130,
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      width: 170,
    },
    {
      field: 'updated_at',
      headerName: 'Updated At',
      width: 170,
    },
    {
      field: 'status',
      headerName: 'Status',
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
  }

  const rows = constructRowsFromData(data);

  return (
    <div>
      <MainCard title="De-idendified CT Scan List" style={{ width: 1500 }}>
        <Typography variant="body2">
          These are the de-identified CT scan data available.
        </Typography>
      </MainCard>
      <div
        style={{
          marginTop: '2vh',
          maxHeight: 700,
          width: 1500,
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
        <Button>De-identify Selected CT Scans</Button>
      </div>
    </div>
  );
};

export default DeidCTScanPage;
