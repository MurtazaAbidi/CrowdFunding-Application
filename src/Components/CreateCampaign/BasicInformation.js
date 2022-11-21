import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";

const BasicInformation = () => {
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
          Campaign's Title:
        </div>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              placeholder="Enter Your Campaign Title"
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
          Campaign's Sub-Title:
        </div>
        <Controller
          control={control}
          name="subtitle"
          render={({ field }) => (
            <TextField
              id="subtitle"
              label="Sub-Title"
              variant="outlined"
              placeholder="Enter Your Campaign Sub-Title"
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

export default BasicInformation