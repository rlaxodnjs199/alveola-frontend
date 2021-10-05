import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from 'ui-component/cards/MainCard';

//= =============================|| SAMPLE PAGE ||==============================//

const CTScanPage = () => (
    <MainCard title="CT Scan">
        <Typography variant="body2">
            How many CT scans are available?
        </Typography>
    </MainCard>
);

export default CTScanPage;