import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemButton,
  TextField,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ImgRRAVC from 'assets/images/rravc.PNG';
import ImgFSAD from 'assets/images/fSAD.PNG';
import FSADChart from './FSAD';
import FEV1PREChart from './FEV1PRE';
import Lung3D from './Lung3D';

const Dashboard = () => {
  const [openBasicInfo, setOpenBasicInfo] = React.useState(false);
  const [openSummary, setOpenSummary] = React.useState(false);

  const handleClickBasicInfo = () => {
    setOpenBasicInfo(!openBasicInfo);
  };

  const handleClickSummary = () => {
    setOpenSummary(!openSummary);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="left" spacing={4}>
                <Grid item>
                  <Paper
                    elevation={8}
                    sx={{ padding: '3.5px' }}
                    style={{ width: 'auto' }}
                  >
                    <List
                      sx={{
                        bgcolor: 'background.paper',
                      }}
                    >
                      <ListItemButton onClick={handleClickBasicInfo}>
                        <ListItemText primary="Basic Info" />
                        {openBasicInfo ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openBasicInfo} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItem>
                            <ListItemText
                              primary="Name"
                              secondary="Jae1 Jeong"
                            />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="Gender" secondary="Female" />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="Age" secondary="35" />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="Height" secondary="1.603m" />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText primary="Weight" secondary="45.1kg" />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText
                              primary="Enrollment date"
                              secondary="11/20/2020"
                            />
                          </ListItem>
                          <Divider component="li" />
                          <ListItem>
                            <ListItemText
                              primary="CT date"
                              secondary="11/23/2020"
                            />
                          </ListItem>
                        </List>
                      </Collapse>
                      {/* <Divider component="li" />
                       */}
                    </List>
                    <List
                      sx={{
                        bgcolor: 'background.paper',
                      }}
                    >
                      <ListItemButton onClick={handleClickSummary}>
                        <ListItemText primary="Summary" />
                        {openSummary ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        in={openSummary}
                        timeout="auto"
                        unmountOnExit
                        style={{ padding: '7px' }}
                      >
                        {' '}
                        <TextField
                          id="filled-multiline-static"
                          label="Summary"
                          multiline
                          rows={4}
                          defaultValue="Default Value"
                          variant="filled"
                        />
                      </Collapse>
                    </List>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={8} sx={{ height: 737, width: 500 }}>
                    <div style={{ padding: '10px' }}>
                      <Typography
                        style={{
                          paddingLeft: '20px',
                          paddingTop: '10px',
                          color: '#616161',
                        }}
                        variant="h3"
                        gutterBottom
                        component="div"
                      >
                        RRAVC
                      </Typography>
                      <img src={ImgRRAVC} alt="Lamis" width="480" />
                      <Divider />
                      <Typography
                        style={{
                          paddingLeft: '20px',
                          paddingTop: '30px',
                          color: '#616161',
                        }}
                        variant="h3"
                        gutterBottom
                        component="div"
                      >
                        fSAD & Diaphragm motion
                      </Typography>
                      <img src={ImgFSAD} alt="Lamis" width="480" />
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={8} sx={{ height: 737, width: 500 }}>
                    <Lung3D />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={8} sx={{ height: 737, width: 350 }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width={300}
                      height={300}
                    >
                      <Box m="auto">
                        <FSADChart />
                        <FEV1PREChart />
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Dashboard;
