import React from 'react';
import { formatDistance, subDays } from 'date-fns';
import CommentForm from './CommentForm.tsx';
import { CommentType } from './Comment.types.ts';
import Reply from './Reply.tsx';

type CommentProps = {
  comment: CommentType;
  onUpdateComment: (_text: string) => void;
  onDeleteComment: () => void;
  onReply: (_text: string) => void;
};

const Comment: React.FC<CommentProps> = function ({ comment, onUpdateComment, onDeleteComment, onReply }) {
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

  // TODO: fix canDelete by applying some logic
  // const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes;
  const canDelete = true; // currentUserId === comment.userId && replies.length === 0 && !timePassed;
  // TODO: fix canEdit by applying some logic
  const canEdit = true; // currentUserId === comment.userId && !timePassed;

  const createdAtForOnHover = new Date(comment.createdAt).toLocaleDateString();
  const createdAt = formatDistance(subDays(new Date(comment.createdAt), 3), new Date(), { addSuffix: true });

  return (
    <div className="flex rounded-lg p-3 hover:bg-gray-200">
      <div className="avatar">
        <div className="m-2 h-12 w-12 rounded-full ">
          <img src={comment.creator.image} alt="User Avatar" />
        </div>
      </div>
      <div className="w-100%">
        <div className="flex">
          <div className="mr-2 text-lg text-gray-700">{comment.creator.username}</div>
          <div className="tooltip pt-2 text-xs text-gray-400" data-tip={createdAtForOnHover}>
            {createdAt}
          </div>
        </div>
        {isEditing ? (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            onSubmit={(text) => {
              onUpdateComment(text);
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
          <div className="tooltip mr-3" data-tip="join the" onClick={startReplying} aria-hidden="true">
            Reply
          </div>
          {canEdit && (
            <div className="mr-8" onClick={startEditing} aria-hidden="true">
              Edit
            </div>
          )}
          {canDelete && (
            <div className="mr-8" onClick={() => onDeleteComment()} aria-hidden="true">
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="comment"
            onSubmit={(text) => {
              onReply(text);
              finishEditingAndReplying();
            }}
            hasCancelButton
            handleCancel={() => {
              finishEditingAndReplying();
            }}
          />
        )}
        {comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} onUpdate={() => {}} onDelete={() => {}} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
