import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import CampaignComments from "./CampaignComments";
import InvestorsList from "./InvestorsList";
import "./Modal.css";
import Updates from "./UpdatesList";

function Modal({ setOpenModal, dataForModal }) {
  const [invertorsFlag, setInvestorFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [commentsFlag, setCommentsFlag] = useState(false);

  return (
    <div style={{marginTop:'-2rem'}} className="modalBackground">
      <div className="modalContainer" style={{boxShadow:'#000000 0px 0px 40px 10px'}}>
          {invertorsFlag === true ? (<InvestorsList dataForModal={dataForModal} />) : updateFlag === true ? (<Updates dataForModal={dataForModal}/>) : commentsFlag === true ? (
          <>
          <div className="titleCloseBtn">
          <button
            onClick={() => {
              setCommentsFlag(false)
            }}
          >
            X
          </button>
          </div>
          <CampaignComments/>
          </>
          ): (
            <>
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
        <div className="body" style={{paddingTop:'2rem'}}>
          <img src={dataForModal.img} alt={dataForModal.title} style={{height:'15rem', paddingRight:'1rem'}} />
          <p style={{textAlign:"left", height:'13rem', overflow:'hidden scroll', paddingRight:'1rem', fontSize:'1.3rem'}}>{dataForModal.desc}</p>
        </div>
          <div style={{  height:'1rem', fontSize:'1rem', textDecoration:'underline', padding:'5px 23px',borderRadius:30, color:'#4267B2', fontWeight:800, textAlign:'right'}}><span style={{cursor:'pointer'}} onClick={()=>{console.log("like button Clicked")}}>Likes: {dataForModal.like}</span></div>
          <ProgressBar progress={dataForModal.progress} height={22} />
          </>
        )}

        <div className="footer">
        {!(invertorsFlag===true || updateFlag===true || commentsFlag===true) ?(<>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
            >
            Cancel
          </button>
          <button onClick={()=>{setUpdateFlag(true)}}>Updates</button>
          <button style={{backgroundColor:'white', color:' cornflowerblue', border:'1px solid'}} onClick={()=>{setInvestorFlag(true)}}>Investors</button>
          <button style={{backgroundColor:'white', color:' cornflowerblue', border:'1px solid'}} onClick={()=>{setCommentsFlag(true)}}>Comments</button>
            {dataForModal.hoursLeft<=30 && dataForModal.progress!==100?<><button style={{width:'17rem', backgroundColor:'crimson' }}>Time-Extend Request</button></>:null}
            </>
            ): (invertorsFlag === true || updateFlag=== true) ?
            <button style={{
              backgroundColor: "white",
              color:'cornflowerblue',
              border: "2px solid cornflowerblue",
            }} onClick={()=>{setInvestorFlag(false); setUpdateFlag(false); setCommentsFlag(false)}}> BACK </button>:null
            }
        </div>
      </div>
    </div>
  );
}

export default Modal;