import React from 'react'
import './comments-styling.css'
import Comments from './comments/Comments'

const CampaignComments = ({dataForModal}) => {
  return (
    <>
    {/* <div className="modaltitle" style={{position:'absolute',paddingTop:'2rem', textDecoration:'underline'}}>
      Comments
        </div> */}
          {/* <span style={{textDecoration:'underline'}}>Comments  </span> */}
        <div className="body" style={{position:'relative', bottom:'2rem', }}>

    
    <Comments
        currentUserId="1" dataForModal={dataForModal}
        />
        </div>
    
    </>
  )
}

export default CampaignComments