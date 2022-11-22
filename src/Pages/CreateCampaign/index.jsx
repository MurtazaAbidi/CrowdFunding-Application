import React from 'react'
import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

const CreateCampaign = () => {
  return (
    <>
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper style={{background:'transparent'}} component={Box} p={3}>
            <LinearStepper />
          </Paper>
        </Container>
      </>
  );
};

export default CreateCampaign;
