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
type CommentProps = {
  comment: CommentType;
  replies: Array<CommentType>;
  onUpdateComment: (text: string, id: string) => void;
  onDeleteComment: (id: string) => void;
  onAddComment: (text: string, replyId: string) => void;
  parentId?: string | null;
  currentUserId: string;
};

const Comment: React.FC<CommentProps> = function ({
  comment,
  replies,
  onUpdateComment,
  onDeleteComment,
  onAddComment,
  parentId = null,
  currentUserId,
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isReplying, setIsReplying] = React.useState(false);

  const startEditing = () => {
    setIsEditing(true);
    setIsReplying(false);
  };

  const startReplying = () => {
    setIsEditing(false);
    setIsReplying(true);
  };

  const finishEditingAndReplying = () => {
    setIsEditing(false);
    setIsReplying(false);
  };

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
        {isEditing ? (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => {
              onUpdateComment(text, comment.id);
              finishEditingAndReplying();
            }}
            handleCancel={() => {
              finishEditingAndReplying();
            }}
          />
        ) : (
          <div className="m-3 text-sm text-gray-600">{comment.body}</div>
        )}
        <div className="comment-actions">
          {canReply && (
            <div className="tooltip mr-3" data-tip="join the" onClick={startReplying} aria-hidden="true">
              Reply
            </div>
          )}
          {canEdit && (
            <div className="mr-8" onClick={startEditing} aria-hidden="true">
              Edit
            </div>
          )}
          {canDelete && (
            <div className="mr-8" onClick={() => onDeleteComment(comment.id)} aria-hidden="true">
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="comment"
            handleSubmit={(text) => {
              onAddComment(text, replyId);
              finishEditingAndReplying();
            }}
            hasCancelButton
            handleCancel={() => {
              finishEditingAndReplying();
            }}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                onUpdateComment={onUpdateComment}
                onDeleteComment={onDeleteComment}
                onAddComment={onAddComment}
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
