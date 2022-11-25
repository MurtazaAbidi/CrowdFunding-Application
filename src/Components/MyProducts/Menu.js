import React from "react";
import ProgressBar from "../ProgressBar";

const Menu = ({ items, setModalOpen, setDataForModal }) => {
  
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, like, desc, progress, hoursLeft } = item;
        return (
          <article style={{marginLeft:'-5rem'}} onClick={()=>{setModalOpen(true);setDataForModal(item); console.log(item)}} key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div style={{width:'30rem'}} className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price" style={{color:hoursLeft<=30 && progress!==100?'#DC3545':null}}>Time Left: {hoursLeft}hr</h4>
              </header>
              <p className="item-text">{desc}</p>
              <div style={{textAlign:'right', margin:'5px', }}><span style={{ padding:'5px 23px',borderRadius:30, color:'#4267B2', fontWeight:700}}>Likes: {like}</span></div>
              <ProgressBar progress={progress} height={25} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
