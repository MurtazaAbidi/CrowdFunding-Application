import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const CampaignInvestmentType = (props) => {
  const { control } = useFormContext();
  const { campType } = props;
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "80%",
          marginTop: "2rem",
        }}
      >
        {campType === "reward" ? (
          <>
            <div
              style={{
                paddingLeft: "1rem",
                marginTop: "1rem",
                fontWeight: 600,
              }}
            >
              Reward Name:
            </div>
            <Controller
              control={control}
              name="rewardName"
              render={({ field }) => (
                <TextField
                  id="rewardName"
                  label="Reward Name"
                  variant="outlined"
                  placeholder="Enter the Reward Name"
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
              Donation Amount:
            </div>
            <Controller
              control={control}
              name="donationAmount"
              render={({ field }) => (
                <TextField
                  id="donationAmount"
                  label="Donation Amount"
                  variant="outlined"
                  placeholder="Enter the Donation Amount"
                  fullWidth
                  margin="normal"
                  type="number"
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
              Reward Description:
            </div>
            <Controller
              control={control}
              name="rewardDescription"
              render={({ field }) => (
                <TextField
                  id="rewardDescription"
                  label="Reward Description"
                  variant="outlined"
                  placeholder="Enter the Reward Description"
                  fullWidth
                  margin="normal"
                  required
                  {...field}
                />
              )}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default CampaignInvestmentType;
