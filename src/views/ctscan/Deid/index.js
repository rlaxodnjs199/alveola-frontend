import React from 'react';
import useSWR from 'swr';

// material-ui
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';

// project imports
import config from 'config';
import apiFetcher from 'services/apiFetcher';
import MainCard from 'ui-component/cards/MainCard';
import Loader from 'ui-component/Loader';

//= =============================|| RAW CT SCAN PAGE ||==============================//

const DeidCTScanPage = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { data } = useSWR(config.apiEndpoints.deid, apiFetcher);
  if (!data) return <Loader />;

  const renderDetailsButton = (param) => {
    return (
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          autoWidth
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>{param.row.status}</em>
          </MenuItem>
          <MenuItem value={10}>
            <em>VIDA-imported</em>
          </MenuItem>
          <MenuItem value={20}>
            <em>DL-segmented</em>
          </MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    );
  };

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
      field: 'in_or_ex',
      headerName: 'IN / EX',
      width: 170,
    },
    {
      field: 'timepoint',
      headerName: 'Timepoint',
      width: 170,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 170,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
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
          pageSize={15}
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
        <Button>Update Scan Status</Button>
      </div>
    </div>
  );
};

export default DeidCTScanPage;
