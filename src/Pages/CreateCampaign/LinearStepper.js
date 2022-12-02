import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GrAdd } from "react-icons/gr";

import { useForm, FormProvider } from "react-hook-form";

import BasicInformation from "../../Components/CreateCampaign/BasicInformation";
import Story from "../../Components/CreateCampaign/Story";
import Budget from "../../Components/CreateCampaign/Budget";
import AddPicturesAndVideo from "../../Components/CreateCampaign/AddPicturesAndVideo";
import CampaignInvestmentType from "../../Components/CreateCampaign/CampaignInvestmentType";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Story",
    "Budget",
    "Add Pictures and Video",
    // "Campaign Investment Type",
  ];
}

function getStepContent(step, campType = "") {
  switch (step) {
    case 0:
      return <BasicInformation />;
    case 1:
      return <Story />;
    case 2:
      return <Budget />;
    case 3:
      return <AddPicturesAndVideo />;
    // case 4:
    //   return <CampaignInvestmentType campType={campType} />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [overallData, setOverallData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [campaignTypeArr, setCampaignTypeArr] = useState([]);
  const [disableSubmitFlag, setDisableSubmitFlag] = useState(true);
  const [campaignTypeCols, setCampaignTypeCols] = useState([]);
  const [campType, setCampType] = useState("");
  const [images, setImages] = useState([]);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      title: "",
      subtitle: "",
      projectDescription: "",
      risk: "",
      goalAmount: "",
      picture: "",
    },
  });
  const campaignType = useForm();

  const isStepOptional = (step) => {
    // currently no step is optional
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const hanldeCampaignTypeSubmit = (data) => {
    console.log(data);
    if (campaignTypeCols.length === 0) {
      let temp = [];

      for (const property in data) {
        temp.push(property);
      }
      setCampaignTypeCols(temp);
    }
    let temp = [];
    for (const property in data) {
      temp.push(data[property]);
    }
    let campArr = [...campaignTypeArr];
    // setCampaignTypeArr([])
    campArr.push(temp);
    setCampaignTypeArr(campArr);

    console.log(campaignTypeArr);
    setDisableSubmitFlag(false);
  };

  const handleNext = (data) => {
    setOverallData(data);
    // }

    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    let sendtoapi = { ...data, picture: images[0] };
    if (activeStep+1 > 3){
      axios
      .post(
        // body: JSON.stringify({
        `http://localhost:3300/api/createcampaign`,
        sendtoapi,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          alert(response.data);
        }
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });
    }
    };
    
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div
      style={{
        marginLeft: "8rem",
        minHeight: "34rem",
        backgroundColor: "hsl(210deg 36% 96% / 94%)",
      }}
    >
      <Stepper
        style={{ paddingLeft: "2rem", backgroundColor: "transparent" }}
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : // ) : activeStep < steps.length - 1 ? (
      activeStep < steps.length ? (
        <>
          <h1
            style={{
              textAlign: "center",
              background: "linear-gradient(to right, #00073d, #051595)",
            }}
          >
            {steps[activeStep]}
          </h1>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {activeStep === 3 ? (
                <AddPicturesAndVideo images={images} setImages={setImages} />
              ) : (
                getStepContent(activeStep)
              )}

              <div style={{ textAlign: "center" }}>
                <Button
                  style={{ margin: "2rem" }}
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    style={{ margin: "2rem" }}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )}
                {images.length === 0 && activeStep === 3 ? (
                  <span
                    style={{
                      margin: "1rem",
                      backgroundColor: "lightgrey",
                      padding: "7px 13px",
                      fontSize: "initial",
                      borderRadius: "8px",
                      border: "1px solid grey",
                      color: "grey",
                    }}
                  >
                    {" "}
                    NEXT{" "}
                  </span>
                ) : (
                  <Button
                    style={{ margin: "2rem", backgroundColor: "#003047" }}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    // disable={true}
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        </>
      ) : null
      // <>
      //   <h1 style={{ textAlign: "center" }}>
      //     {steps[activeStep]}
      //     {campType !== "" ? " (" + campType + " based) " : null}
      //   </h1>
      //   {campaignTypeCols.length === 0 ? (
      //     <>
      //       <div
      //         style={{
      //           paddingTop: "2rem",
      //           paddingLeft: "7rem",
      //           marginBottom: "1rem",
      //           fontWeight: 600,
      //         }}
      //       >
      //         Select Investment Type:
      //       </div>
      //       <div style={{ paddingLeft: "6rem" }}>
      //         <label>
      //           <input
      //             style={{ marginLeft: "4rem" }}
      //             type="radio"
      //             value="reward"
      //             name="campaigntype"
      //             id="campaigntype"
      //             onChange={() => {
      //               setCampType("reward");
      //             }}
      //           />{" "}
      //           Reward Based
      //         </label>

      //         <label>
      //           <input
      //             style={{ marginLeft: "4rem" }}
      //             type="radio"
      //             value="profit"
      //             name="campaigntype"
      //             id="campaigntype"
      //             onChange={() => {
      //               setCampType("profit");
      //             }}
      //           />{" "}
      //           Profit Based
      //         </label>

      //         <label>
      //           <input
      //             style={{ marginLeft: "4rem" }}
      //             type="radio"
      //             value="equity"
      //             name="campaigntype"
      //             id="campaigntype"
      //             onChange={() => {
      //               setCampType("equity");
      //             }}
      //           />{" "}
      //           Equity Based
      //         </label>

      //         <label>
      //           <input
      //             style={{ marginLeft: "4rem" }}
      //             type="radio"
      //             value="donation"
      //             name="campaigntype"
      //             id="campaigntype"
      //             onChange={() => {
      //               setCampType("donation");
      //             }}
      //           />{" "}
      //           Donation Based
      //         </label>
      //       </div>
      //     </>
      //   ) : null}
      //   <FormProvider {...campaignType}>
      //     <form
      //       onSubmit={campaignType.handleSubmit(hanldeCampaignTypeSubmit)}
      //     >
      //       {getStepContent(activeStep, campType)}
      //       {campType !== "" ? (
      //         <div style={{ textAlign: "right", margin: "1rem" }}>
      //           <Button
      //             type="submit"
      //             variant="outlined"
      //             color="primary"
      //             endIcon={<GrAdd />}
      //           >
      //             Add another Reward
      //           </Button>
      //         </div>
      //       ) : null}
      //     </form>
      //   </FormProvider>
      //   {disableSubmitFlag ? null : (
      //     <table style={{ margin: "auto" }}>
      //       <thead>
      //         <tr>
      //           <th
      //             style={{
      //               padding: "20px 50px",
      //               textAlign: "center",
      //               border: "1px solid",
      //               backgroundColor: "rgb(0, 48, 71)",
      //               color: "#fff",
      //             }}
      //           >
      //             #
      //           </th>
      //           {campaignTypeCols.map((element, index) => {
      //             return (
      //               <th
      //                 style={{
      //                   padding: "20px 50px",
      //                   textAlign: "center",
      //                   border: "1px solid",
      //                   backgroundColor: "rgb(0, 48, 71)",
      //                   color: "#fff",
      //                 }}
      //               >
      //                 {element}
      //               </th>
      //             );
      //           })}
      //           <th
      //             style={{
      //               padding: "20px 50px",
      //               textAlign: "center",
      //               border: "1px solid",
      //               backgroundColor: "rgb(0, 48, 71)",
      //               color: "#fff",
      //             }}
      //           >
      //             Action
      //           </th>
      //           {/* <th>First Name</th>
      //   <th>Last Name</th>
      //   <th>Username</th> */}
      //         </tr>
      //       </thead>
      //       <tbody style={{ padding: 5 }}>
      //         {campaignTypeArr.map((element, index) => {
      //           return (
      //             <tr key={index}>
      //               <td
      //                 style={{
      //                   padding: "10x 50px",
      //                   textAlign: "center",
      //                   border: "1px solid",
      //                 }}
      //               >
      //                 {index + 1 + ")"}
      //               </td>
      //               {element.map((ele) => {
      //                 return (
      //                   <td
      //                     style={{
      //                       padding: "10px 50px",
      //                       textAlign: "center",
      //                       border: "1px solid",
      //                     }}
      //                   >
      //                     {ele}
      //                   </td>
      //                 );
      //               })}
      //               <td
      //                 style={{
      //                   padding: "10x 50px",
      //                   textAlign: "center",
      //                   border: "1px solid",
      //                 }}
      //               >
      //                 <Button
      //                   style={{ color: "red", borderColor: "red" }}
      //                   variant="outlined"
      //                   color="error"
      //                   onClick={() => {
      //                     let temp = [...campaignTypeArr];
      //                     let camp = temp.filter((ele, ind) => ind !== index);
      //                     setCampaignTypeArr(camp);
      //                   }}
      //                 >
      //                   Delete
      //                 </Button>
      //               </td>
      //             </tr>
      //           );
      //         })}
      //       </tbody>
      //     </table>
      //   )}

      //   <div style={{ textAlign: "center" }}>
      //     <Button
      //       style={{ margin: "2rem" }}
      //       className={classes.button}
      //       disabled={activeStep === 0}
      //       onClick={handleBack}
      //     >
      //       back
      //     </Button>
      //     {isStepOptional(activeStep) && (
      //       <Button
      //         style={{ margin: "2rem" }}
      //         className={classes.button}
      //         variant="contained"
      //         color="primary"
      //         onClick={handleSkip}
      //       >
      //         skip
      //       </Button>
      //     )}
      //     <Button
      //       style={{
      //         margin: "2rem",
      //         backgroundColor:
      //           disableSubmitFlag || campaignTypeArr.length === 0
      //             ? "#0001"
      //             : "#003047",
      //         color:
      //           disableSubmitFlag || campaignTypeArr.length === 0
      //             ? "#0006"
      //             : "white",
      //       }}
      //       className={classes.button}
      //       variant="contained"
      //       color="primary"
      //       // onClick={handleNext}
      //       disabled={disableSubmitFlag || campaignTypeArr.length === 0}
      //       onClick={() => {
      //         setActiveStep(activeStep + 1);
      //         console.log(overallData);
      //         let send_to_API = {
      //           ...overallData,
      //           InvestmentType: campType,
      //           InvestmentTypeDetails: campaignTypeArr,
      //           picture: images,
      //         };
      //         // let send_to_API = overallData
      //         // send_to_API['InvestmentType']=c
      //         // send_to_API['InvestmentTypeDetails']=campaignTypeArr
      //         console.log(send_to_API);
      //         setOverallData(send_to_API);

      //         axios
      //           .post(
      //             // body: JSON.stringify({
      //             `http://localhost:3300/api/createcampaign`,
      //             send_to_API,
      //             {
      //               headers: {
      //                 "Content-Type": "application/json",
      //                 Accept: "application/json",
      //               },
      //               withCredentials: true,
      //             }
      //           )
      //           .then(function (response) {
      //             console.log(response);
      //             if (response.status === 200) {
      //               alert(response.data);
      //             }
      //           })
      //           .catch(function (error) {
      //             console.log(error.response.data.msg);
      //             alert(error.response.data.msg);
      //           });
      //       }}
      //     >
      //       {activeStep === steps.length - 1 ? "Finish" : "Next"}
      //     </Button>
      //   </div>
      // </>
      }
    </div>
  );
};

export default LinaerStepper;
