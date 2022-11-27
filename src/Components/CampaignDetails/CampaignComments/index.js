import React from 'react'
import './comments-styling.css'
import Comments from './comments/Comments'

const CampaignComments = () => {
  return (
    <>
    {/* <div className="modaltitle" style={{position:'absolute',paddingTop:'2rem', textDecoration:'underline'}}>
      Comments
        </div> */}
          {/* <span style={{textDecoration:'underline'}}>Comments  </span> */}
        <div className="body" style={{position:'relative', bottom:'2rem', }}>

    
    <Comments
        currentUserId="1"
        />
        </div>
    
    </>
  )
}

export default CampaignComments