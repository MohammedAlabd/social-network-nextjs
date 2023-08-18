import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm.tsx';
import Comment from './Comment.tsx';
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from '../pages/api/api.tsx';

interface CommentDataTypes {
  id: string;
  username: string;
  image: string;
  body: string;
  userId: string;
  parentId: string | null;
  createdAt: string;
}
interface CommentsProps {
  currentUserId: string;
}

const Comments: React.FC<CommentsProps> = function ({ currentUserId }) {
  const [backendComments, setBackendComments] = useState<CommentDataTypes[]>([]);
  const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);

  const getReplies = (commentId: string) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  const addComment = (text: string, parentId?: string | null) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
    });
  };

  const updateComment = (text: string, commentId: string) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
    });
  };

  const deleteComment = (commentId: string) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
      console.log(backendComments);
    });
  }, []);

  return (
    <div className="m-10 rounded-md bg-gray-100 p-4 ">
      <div className="pb-2 text-lg ">Write comment</div>
      <CommentForm submitLabel="comment" handleSubmit={addComment} />
      <div className="mt-10">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            onAddComment={addComment}
            onDeleteComment={deleteComment}
            onUpdateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
