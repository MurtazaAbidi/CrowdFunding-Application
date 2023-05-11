import React from "react";
import ProgressBar from "../ProgressBar";

const Menu = ({ timeRequestsId, rejectedCampaignsId, items, setModalOpen, setDataForModal, loading }) => {
  console.log(items.days_left)

  return (
    <div className="section-center">
      {
        loading ?
        <div style={{ height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          :
          items.map((item) => {
            const { campaign_id, campaign_title, campaign_image, campaign_description, progress, days_left, likes, campaign_status } = item;
            return (
              <article style={{ textDecoration: (rejectedCampaignsId.length>0?rejectedCampaignsId.includes(campaign_id):null)?'line-through':'none', marginLeft: '-5rem' }} onClick={() => { setModalOpen(true); setDataForModal(item); console.log(item) }} key={campaign_id} className="menu-item">
                <img src={campaign_image} alt={campaign_title} className="photo" />
                <div style={{ width: '30rem' }} className="item-info">
                  <header>
                    <h4>{campaign_title} </h4>
                    <h5 style={{color:'gray'}}>{ (!campaign_status && ! rejectedCampaignsId.includes(campaign_id)) ?' Campaign Request is Pending ... ':(timeRequestsId.includes(campaign_id))?' Time Extension Request Pending ... ':null}</h5>
                    {(rejectedCampaignsId.length>0?rejectedCampaignsId.includes(campaign_id):null)?
                  <h4 className="price" style={{color: 'red', textDecoration:'none !important'}}>Rejected Campaign</h4>:
                    <h4 className="price" style={{ color: (days_left ? days_left.days <= 10 : false) && progress !== 100 ? '#DC3545' : null }}>Days Left: {days_left ? days_left.days : null}</h4>
                  }
                  </header>
                  <p className="item-text">{campaign_description}</p>
                  <div style={{ textAlign: 'right', margin: '5px', }}><span style={{ padding: '5px 23px', borderRadius: 30, color: '#4267B2', fontWeight: 700 }}>Likes: {likes}</span></div>
                  <ProgressBar progress={progress} height={25} />
                </div>
              </article>
            );
          })}
    </div>
  );
};

export default Menu;
