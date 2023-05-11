import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";
import axios from "axios";

const Comments = ({ currentUserId, dataForModal, myCampaigns }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId, dataForModal.campaigner_name).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
    console.log(dataForModal.campaign_id, dataForModal.campaigner_id, text)
    const data_send_to_comment_api = {
      campaign_id: dataForModal.campaign_id,
      campaigner_id: dataForModal.campaigner_id,
      comment_msg: text
    }
    axios
      .post(
        // body: JSON.stringify({
        `${process.env.REACT_APP_API_URL}/api/campaigner/addcomment`,
        data_send_to_comment_api,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log('Comment Added successfully');
        }
      })
      .catch(function (error) {
        console.log(error.response.data.msg);
        alert(error.response.data.msg);
      });

  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    let commentData = [];
    dataForModal.comments.forEach((element, index) => {
      commentData.push(
        {
          id: element.comment_id,
          body: element.comment_msg,
          username: element.investor_name ? element.investor_name : element.campaigner_name,
          userId: null,
          parentId: null,
          createdAt: element.comment_date,
        }
      )
    })
    console.log(commentData)
    setBackendComments(commentData);
  }, [dataForModal.comments]);

  return (
    <div className="comments">
      <div className="comment-form-title">{myCampaigns && dataForModal.campaign_status===true ? 'Write comment:' : 'Comments'}</div>
        
      {myCampaigns && dataForModal.campaign_status===true ?
          <CommentForm submitLabel="Write" handleSubmit={addComment} />
          : null}

          <div style={{ marginTop: '1rem', borderTop: '1px white', borderTopStyle: 'inset' }} />
      <div style={{ backgroundColor: 'aliceblue', height: '21rem', width: '50rem', textAlign: 'center', padding: '2rem', margin: '1.25rem', border: '2px solid', boxShadow: 'grey 20px 20px 20px 0px, inset grey 0px 0px 2rem 0px', overflowY: 'scroll' }}>

        <div className="comments-container">
          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
