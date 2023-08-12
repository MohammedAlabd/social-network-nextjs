import React from 'react';
import { formatDistance, subDays } from 'date-fns';
import CommentForm from './CommentForm.tsx';

type CommentType = {
  id: string;
  username: string;
  image: string;
  body: string;
  userId: string;
  createdAt: string;
};
type ActiveComment = {
  id: string;
  type: string;
};
type CommentProps = {
  comment: CommentType;
  replies: Array<CommentType>;
  setActiveComment: (comment: ActiveComment | null) => void;
  activeComment: ActiveComment | null;
  updateComment: (text: string, id: string) => void;
  deleteComment: (id: string) => void;
  addComment: (text: string, replyId: string) => void;
  parentId?: string | null;
  currentUserId: string;
};

const Comment: React.FC<CommentProps> = function ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) {
  const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === 'editing';
  const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === 'replying';
  const fiveMinutes = 300000;
  const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes;
  const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId || comment.id;
  const createdAtForOnHover = new Date(comment.createdAt).toLocaleDateString();
  const createdAt = formatDistance(subDays(new Date(comment.createdAt), 3), new Date(), { addSuffix: true });

  return (
    <div key={comment.id} className="flex rounded-lg p-3 hover:bg-gray-200">
      <div className="avatar">
        <div className="m-2 h-12 w-12 rounded-full ">
          <img src={comment.image} alt="User Avatar" />
        </div>
      </div>
      <div className="w-100%">
        <div className="flex">
          <div className="mr-2 text-lg text-gray-700">{comment.username}</div>
          <div className="tooltip pt-2 text-xs text-gray-400" data-tip={createdAtForOnHover}>
            {createdAt}
          </div>
        </div>
        {!isEditing && <div className="m-3 text-sm text-gray-600">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="tooltip mr-3"
              data-tip="join the"
              onClick={() => setActiveComment({ id: comment.id, type: 'replying' })}
              aria-hidden="true"
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="mr-8"
              onClick={() => setActiveComment({ id: comment.id, type: 'editing' })}
              aria-hidden="true"
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div className="mr-8" onClick={() => deleteComment(comment.id)} aria-hidden="true">
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="comment"
            handleSubmit={(text) => addComment(text, replyId)}
            hasCancelButton
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
Comment.defaultProps = {
  parentId: null,
};
export default Comment;
