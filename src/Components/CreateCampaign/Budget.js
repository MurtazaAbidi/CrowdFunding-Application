import React from 'react'
import {useFormContext, Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";

const Budget = () => {
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
          Goal Amount:
        </div>
        <Controller
          control={control}
          name="goalAmount"
          render={({ field }) => (
            <TextField
              id="goalAmount"
              label="Goal Amount"
              variant="outlined"
              placeholder="Enter Your Goal Amount"
              fullWidth
              margin="normal"
              type="number"
              
              required
              {...field}
            />
          )}
        />
      </div>
    );
  };

export default Budget