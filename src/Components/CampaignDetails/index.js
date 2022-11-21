import React from "react";
import ProgressBar from "../ProgressBar";
import "./Modal.css";

function Modal({ setOpenModal, dataForModal }) {
  return (
    <div style={{marginTop:'-2rem'}} className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modaltitle">
          <span style={{textDecoration:'underline'}}>{dataForModal.title}  </span>
          <span style={{paddingLeft:'1.5rem', fontSize:'1.3rem', fontWeight:'100', color:'#c59d5f'}}>(Time left: {dataForModal.hoursLeft}hr)</span>
        </div>
        <div className="body">
          <img src={dataForModal.img} alt={dataForModal.title} style={{height:'15rem', paddingRight:'1rem'}} />
          <p style={{textAlign:"left", height:'13rem', overflow:'hidden scroll', paddingRight:'1rem', fontSize:'1.3rem'}}>{dataForModal.desc}</p>
        </div>
          <div style={{  height:'1rem', fontSize:'1rem', textDecoration:'underline', padding:'5px 23px',borderRadius:30, color:'#4267B2', fontWeight:800, textAlign:'right'}}><span style={{cursor:'pointer'}} onClick={()=>{console.log("like button Clicked")}}>Likes: {dataForModal.like}</span></div>
          <ProgressBar progress={dataForModal.progress} height={22} />

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            >
            Cancel
          </button>
          <button>Updates</button>
          <button style={{backgroundColor:'white', color:' cornflowerblue', border:'1px solid'}}>Investors</button>
          <button style={{backgroundColor:'white', color:' cornflowerblue', border:'1px solid'}}>Comments</button>
            {dataForModal.hoursLeft<=30 && dataForModal.progress!==100?<><button style={{width:'15rem', backgroundColor:'crimson' }}>Time-Extend Request</button></>:null}
        </div>
      </div>
    </div>
  );
}

export default Modal;