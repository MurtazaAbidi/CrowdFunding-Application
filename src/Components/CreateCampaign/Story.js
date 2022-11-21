import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";

const Story = () => {
  const { control } = useFormContext();
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <div
        style={{
          paddingLeft: "1rem",
          marginTop: "1rem",
          fontWeight: 600,
        }}
      >
        Project Description:
      </div>
      <Controller
        control={control}
        name="projectDescription"
        render={({ field }) => (
          <TextField
            id="projectDescription"
            label="Project Description "
            variant="outlined"
            placeholder="Enter Your Project Description"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />
      <div
        style={{
          paddingLeft: "1rem",
          marginTop: "1rem",
          fontWeight: 600,
        }}
      >
        Risk and Challenges:
      </div>
      <Controller
        control={control}
        name="risk"
        render={({ field }) => (
          <TextField
            id="risk"
            label="Risk and Challenges"
            variant="outlined"
            placeholder="Enter Your Risk and Challenges"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />
    </div>
  );
};

export default Story;
