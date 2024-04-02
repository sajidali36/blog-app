import React, { useState } from 'react'
import { Comment } from "../../Types";

interface Props {
  // comment: Comment;

}

const CommentPage: React.FC<Props> = (props: Props) => {
  const [comment, setComment] = useState<Comment>({ id: 0, body: '', name: '', email: '', postId: 0 });

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

  }

  return (
    <form className="w-50 mb-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Comment</label>
        <textarea name="body" className="form-control h-50" value={comment.body} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary float-end">Add Comment</button>
    </form>
  )
}

export default CommentPage;
