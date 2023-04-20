import React from 'react'
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import CampaignContainer from '../../containers/CampaignContainer';

const CreateCampaign = () => {
  return (
    <>
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper style={{background:'transparent'}} component={Box} p={3}>
            <CampaignContainer />
          </Paper>
        </Container>
      </>
  );
};

export default CreateCampaign;
