import React from 'react';
import useSWR from 'swr';

// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@material-ui/core';

// project imports
import apiFetcher from 'services/api';
import { constructRowsFromData } from 'utils/parse-ctscanlist';
import MainCard from 'ui-component/cards/MainCard';
import Loader from 'ui-component/Loader';

//= =============================|| SAMPLE PAGE ||==============================//

const CTScanPage = () => {
  const { data } = useSWR('http://localhost:8000/ct-scans/raw', apiFetcher);
  if (!data) return <Loader />;

  const columns = [
    { field: 'id', width: 100, headerName: 'ID' },
    {
      field: 'project',
      headerName: 'Project',
      width: 170,
    },
    {
      field: 'acquisition_date',
      headerName: 'Acquisition Date',
      width: 250,
    },
    {
      field: 'worker',
      headerName: 'Worker',
      width: 170,
    },
  ];

  const rows = constructRowsFromData(data);

  return (
    <div>
      <MainCard title="Raw CT Scan List" style={{ width: 850 }}>
        <Typography variant="body2">
          These are the raw ct scan data available in the path: {}
        </Typography>
      </MainCard>
      <div
        style={{
          marginTop: '2vh',
          maxHeight: 700,
          width: 850,
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
        />
      </div>
    </div>
  );
};

export default CTScanPage;
