import React from 'react';
import CommentForm from './CommentForm.tsx';
import Comment from './Comment.tsx';
import { CommentType } from './Comment.types.ts';

interface CommentsProps {
  comments: Array<CommentType>;
  onAddComment: (_content: string) => void;
  onReply: (_content: string, commentId: CommentType['id']) => void;
  onUpdateComment: (_content: string, _commentId: CommentType['id']) => void;
  onDeleteComment: (_commentId: CommentType['id']) => void;
}

const Comments: React.FC<CommentsProps> = function ({
  comments,
  onAddComment,
  onUpdateComment,
  onDeleteComment,
  onReply,
}) {
  // const addComment = (text: string, parentId?: string | null) => {
  //   createCommentApi(text, parentId).then((comment) => {
  //     setBackendComments([comment, ...backendComments]);
  //   });
  // };

  // const updateComment = (text: string, commentId: string) => {
  //   updateCommentApi(text).then(() => {
  //     const updatedBackendComments = backendComments.map((backendComment) => {
  //       if (backendComment.id === commentId) {
  //         return { ...backendComment, body: text };
  //       }
  //       return backendComment;
  //     });
  //     setBackendComments(updatedBackendComments);
  //   });
  // };

  // const deleteComment = (commentId: string) => {
  //   if (window.confirm('Are you sure you want to remove comment?')) {
  //     deleteCommentApi().then(() => {
  //       const updatedBackendComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
  //       setBackendComments(updatedBackendComments);
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //     console.log(backendComments);
  //   });
  // }, []);

  return (
    <div className="m-10 rounded-md bg-gray-100 p-4 ">
      <div className="pb-2 text-lg ">Write comment</div>
      <CommentForm submitLabel="comment" onSubmit={onAddComment} />
      <div className="mt-10">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={(content: string) => onReply(content, comment.id)}
            onDeleteComment={() => onDeleteComment(comment.id)}
            onUpdateComment={(content) => onUpdateComment(content, comment.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
