import React from "react";
import {useFormContext, Controller} from "react-hook-form";
import {TextField} from "@material-ui/core";

const AddPicturesAndVideo = () => {
  const { control } = useFormContext();
  return (
    <div style={{ margin: "auto", width: "80%"}}>
      <div
        style={{
          paddingLeft: "1rem",
          marginTop: "1rem",
          fontWeight: 600,
        }}
      >
        Add Campaign's Image:
      </div>
      <Controller
        control={control}
        name="picture"
        render={({ field }) => (
          <TextField
            id="picture"
            // label="Add Picture"
            accept="image/*"
            type="file"
            variant="outlined"
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

export default AddPicturesAndVideo;
