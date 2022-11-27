import React from "react";
import './investors-styling.css'

const InvestorsList = ({dataForModal}) => {
  return (
    <>
        <div style={{ fontSize:'2rem' , textAlign:'center', paddingBottom: "1rem" }}>
          Investors List for <span style={{fontWeight:700, textTransform:"capitalize"}}>{dataForModal.title} </span></div>
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
          {/* <thead>
            <tr>
              <th
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Col1
              </th>
              <th
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Col2
              </th>
              <th
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
                >
                Col3
              </th>
              <th
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Col4
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data1
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data2
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
              Data3
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data4
              </td>
              </tr>
            <tr>
              <td
              style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data1
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
                >
                Data2
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data3
              </td>
              <td
              style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
              Data4
              </td>
            </tr>
            <tr>
              <td
              style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
              Data1
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data2
              </td>
              <td
                style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data3
              </td>
              <td
              style={{
                  border: "1px solid",
                  textAlign: "center",
                  padding: 5,
                  width: "15rem",
                }}
              >
                Data4
              </td>
              </tr>
          </tbody> */}












<tr id="header">
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Country</th>
        </tr>
        
        <tr>
            <td>John </td>
            <td>Doe </td>
            <td>25 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>steve </td>
            <td>Doe </td>
            <td>28 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>simo </td>
            <td>Doe </td>
            <td>26 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>karim </td>
            <td>Doe </td>
            <td>21 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>adam </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>

        </table>
      </div>
              {/* </div> */}
    </>
  );
};

export default InvestorsList;
