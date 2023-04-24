import React from "react";
import "./investors-styling.css";
// import investorData from "./investorsData";

const InvestorsList = ({ dataForModal }) => {
  console.log(dataForModal)
  return (
    <>
      <div
        style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
      >
        Investors List for{" "}
        <span style={{ fontWeight: 700, textTransform: "capitalize" }}>
          {dataForModal.campaign_title}{" "}
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
          {dataForModal.investors.map((element, index) => {
            return (
              <tr key={element.invest_id}>
                <td>{index + 1}</td>
                <td>{element.investor_name}</td>
                <td>{element.investor_email}</td>
                <td>Rs. {element.invest_amount} /=</td>
              </tr>
            );
          })}
          {dataForModal.investors.length===0 ?(
              <tr >
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            ):null
          }
        </table>
      </div>
      {/* </div> */}
    </>
  );
};

export default InvestorsList;
