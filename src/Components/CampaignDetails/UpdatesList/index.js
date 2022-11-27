import React, { useState } from "react";
import UpdateData from "./UpdateData";
import './update-styling.css';

const today = new Date().toLocaleDateString();

const Updates = ({ dataForModal }) => {
  const [allUpdates, setAllUpdates] = useState(UpdateData)
  const [addupdateData, setAddUpdateData] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.title.value)
    // console.log(e.target.desc.value)
    // console.log(e.target.per.value)
    setAllUpdates([...allUpdates, {title: e.target.title.value, description: e.target.desc.value, percent: e.target.per.value, Date: today}])
    setAddUpdateData(false);
  }

  return (
    <>
      <div
        style={{ fontSize: "2rem", textAlign: "center", paddingBottom: "1rem" }}
      >
        {addupdateData?<span>Add </span>:null}
        Updates for{" "}
        <span style={{ fontWeight: 900 }}>{dataForModal.title}</span>
        {/* <span style={{fontWeight:700, textTransform:"capitalize"}}>{dataForModal.title} </span> */}
      </div>
      {addupdateData===false?(
      <><div
        style={{
          textAlign: "right",
          paddingRight: "2rem",
          marginBottom: "1rem",
        }}
      >
        <button
          className="updates-button"
          onClick={()=>{
            setAddUpdateData(true);
          }}
        >
          Add Update
        </button>
      </div>
      <div style={{ overflowY: "scroll", minHeight: "17rem" }}>
        <table style={{ margin: "auto" }}>
          <tr id="header">
            <th>#</th>
            <th>Update Title</th>
            <th>Description</th>
            <th>Progress</th>
            <th>Date</th>
          </tr>

          {allUpdates.map((element, index) => {
            return (
              <tr>
                <td>{index + 1} </td>
                <td>{element.title} </td>
                <td sytle={{ textAlign: "left" }}>{element.description} </td>
                <td>{element.percent}% </td>
                <td>{element.Date} </td>
              </tr>
            );
          })}
        </table>
      </div>
      </>):(
        <div className="add-update-form" >
        <form onSubmit={submitHandler}>
          
          <div className="each-add-update">
          <label for="title" className="input-label-update">Update Title</label>
          <input id="title" className="update-input-field" placeholder="Update Title" type="text" name="title" required/>
          </div>
          
          <div className="each-add-update">
          <label for="desc" className="input-label-update">Update Description</label>
          <textarea id="desc" className="update-inputtextarea-field" placeholder="Update Description" type="text" name="desc" required/>
          </div>
          
          <div className="each-add-update">
          <label for="per" className="input-label-update">Update Progress Percentage</label>
          <input id="per" className="update-input-field" placeholder="Update progress Percentage" type="number" name="per" min={dataForModal.progress} max="100" required/>
          </div>
          <div className="update-submit-div">
        <button className="updates-button">Submit</button>
          </div>
        </form>
        </div>
      )}
    </>
  );
};

export default Updates;
