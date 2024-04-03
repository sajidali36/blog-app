import React, { useState } from 'react'
import { Comment } from "../../Types";

interface Props {
  postId: number;
  comments: Comment[];
  setCommentsState: React.Dispatch<React.SetStateAction<Comment[]>>;

}

const CommentPage: React.FC<Props> = ({ postId, comments, setCommentsState }) => {
  let userName = localStorage.getItem('currentUserName');
  let userEmail = localStorage.getItem('currentUserEmail');
  if (!userName) {
    userName = '';
  }
  if (!userEmail) {
    userEmail = '';
  }

  const [comment, setComment] = useState<Comment>({ id: 0, body: '', name: userName, email: userEmail, postId: postId });

  const filterComments = comments.filter(comment => comment.postId === postId);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value, });
  }

  const deleteComment = (commentId: number) => {
    setCommentsState(comments.filter((filterComment) => filterComment.id !== commentId));
  };

  const editComment = (editComment: Comment) => {
    setComment({ ...comment, id: editComment.id, body: editComment.body });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (comment.id) {
      setCommentsState(comments.map((c) => (c.id === comment.id ? comment : c)));
    } else {
      const newComment = { ...comment, id: Date.now() };
      setCommentsState([...comments, newComment]);
    }

    setComment({ ...comment, id: 0, body: '' });
  }


  return (
    <>
      <h6 className="text-primary">All Comments</h6>
      {filterComments.map((currentComment) => (
        <div className="mt-3" key={currentComment.id}>
          <p className="mb-0">{currentComment.body}</p>
          {currentComment.email === userEmail && (
            <>
              <div className="mb-5">
                <button className="btn btn-sm btn-danger float-end" onClick={() => deleteComment(currentComment.id)}>Delete</button>
                <button className="btn btn-sm btn-info mx-2 float-end" onClick={() => editComment(currentComment)}>Edit</button>
              </div>
            </>
          )}
        </div >
      ))}
      <form className="w-75 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea name="body" className="form-control h-50" value={comment.body} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary float-end">Add Comment</button>
      </form>
    </>
  )
}

export default CommentPage;
