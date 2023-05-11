import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";
import CampaignComments from "./CampaignComments";
import InvestorsList from "./InvestorsList";
import "./Modal.css";
import Updates from "./UpdatesList";
import axios from "axios";

function Modal({ timeRequestsId, setTimeRequestsId, rejectedCampaignsId, setOpenModal, dataForModal, setDataForModal, myCampaigns }) {
  const [invertorsFlag, setInvestorFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [commentsFlag, setCommentsFlag] = useState(false);

  const handleTimeExtendRequest = (id) => {
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/campaigner/campaignextensionrequest/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then(function (response) {
        console.log(response.data);
        setTimeRequestsId([...timeRequestsId, id])
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });
  }

  useEffect(() => {
    axios.get(
      // body: JSON.stringify({
      `${process.env.REACT_APP_API_URL}/api/campaigner/getcampaigndetails/${dataForModal.campaign_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then(function (response) {
        console.log(response.data);
        setDataForModal({ ...dataForModal, milestones: response.data.milestones, investors: response.data.investors, comments: response.data.comments, rejected: response.data.rejected })
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });
  }, [dataForModal.campaign_id])

  return (
    <div style={{ marginTop: '-2rem' }} className="modalBackground">
      <div className="modalContainer" style={{ boxShadow: '#000000 0px 0px 40px 10px' }}>
        {invertorsFlag === true ? (<InvestorsList dataForModal={dataForModal} />) : updateFlag === true ? (<Updates dataForModal={dataForModal} />) : commentsFlag === true ? (
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
            <CampaignComments dataForModal={dataForModal} myCampaigns={myCampaigns} />
          </>
        ) : (
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
              <span style={{ textDecoration: 'underline' }}>{dataForModal.campaign_title}  </span>
              {(rejectedCampaignsId.length > 0 ? rejectedCampaignsId.includes(dataForModal.campaign_id) : null) ?

                <span style={{ paddingLeft: '1.5rem', fontSize: '1.3rem', fontWeight: '100', color: 'red' }}>(Rejected Campaign)</span>
                : <span style={{ paddingLeft: '1.5rem', fontSize: '1.3rem', fontWeight: '100', color: '#c59d5f' }}>(Days left: {dataForModal.days_left.days} days)</span>
              }
            </div>
            <div className="body" style={{ paddingTop: '2rem' }}>
              <img src={dataForModal.campaign_image} alt={dataForModal.campaign_title} style={{ height: '15rem', paddingRight: '1rem' }} />
              <p style={{ textAlign: "left", height: '13rem', overflow: 'hidden scroll', paddingRight: '1rem', fontSize: '1.3rem' }}>{(rejectedCampaignsId.length > 0 ? rejectedCampaignsId.includes(dataForModal.campaign_id) : null) ? <h2 style={{ color: 'red' }}><h1>Rejected Reason: </h1><hr />{dataForModal.rejected ? dataForModal.rejected[0].rejected_message : null}<hr /></h2> : null}{dataForModal.campaign_description}</p>
            </div>
            <div style={{ height: '1rem', fontSize: '1rem', textDecoration: 'underline', padding: '5px 23px', borderRadius: 30, color: '#4267B2', fontWeight: 800, textAlign: 'right' }}><span style={{ cursor: 'pointer' }} onClick={() => { console.log("like button Clicked") }}>Likes: {dataForModal.likes}</span></div>
            <ProgressBar progress={dataForModal.progress} height={22} />
          </>
        )}

        <div className="footer">
          {!(invertorsFlag === true || updateFlag === true || commentsFlag === true) ? (<>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => { setUpdateFlag(true) }}>MileStones</button>
            <button style={{ backgroundColor: 'white', color: ' cornflowerblue', border: '1px solid' }} onClick={() => { setInvestorFlag(true) }}>Investors</button>
            <button style={{ backgroundColor: 'white', color: ' cornflowerblue', border: '1px solid' }} onClick={() => { setCommentsFlag(true) }}>Comments</button>
            { dataForModal.campaign_status!==false && !(rejectedCampaignsId.includes(dataForModal.campaign_id)) && !(timeRequestsId.includes(dataForModal.campaign_id)) && dataForModal.days_left.days <= 10 && dataForModal.progress !== 100 && myCampaigns === true ? <><button onClick={() => { handleTimeExtendRequest(dataForModal.campaign_id) }} style={{ width: '17rem', backgroundColor: 'crimson' }}>Time-Extend Request</button></> : null}
          </>
          ) : (invertorsFlag === true || updateFlag === true) ?
            <button style={{
              backgroundColor: "white",
              color: 'cornflowerblue',
              border: "2px solid cornflowerblue",
            }} onClick={() => { setInvestorFlag(false); setUpdateFlag(false); setCommentsFlag(false) }}> BACK </button> : null
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;