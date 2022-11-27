import React from "react";
import "./investors-styling.css";
import investorData from "./investorsData";

const InvestorsList = ({ dataForModal }) => {
  return (
    <>
      <div
        style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
      >
        Investors List for{" "}
        <span style={{ fontWeight: 700, textTransform: "capitalize" }}>
          {dataForModal.title}{" "}
        </span>
      </div>
      <div
        style={{
          // height: "14rem",
          // width: "50rem",
          // textAlign: "center",
          // padding: "1rem",
          // margin: "2rem",
          // border: "2px solid",
          overflowY: "scroll",
        }}
      >
        {/* <div style={{height:'5rem'}}> */}

        <table style={{ margin: "auto" }}>
          <tr id="header">
            <th>#</th>
            <th>Investor Name</th>
            <th>Investor Email</th>
            <th>Investment Amount</th>
          </tr>
          {investorData.map((element, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{element.investorName}</td>
                <td>{element.investorEmail}</td>
                <td>Rs. {element.amount} /=</td>
              </tr>
            );
          })}
        </table>
      </div>
      {/* </div> */}
    </>
  );
};

export default InvestorsList;
