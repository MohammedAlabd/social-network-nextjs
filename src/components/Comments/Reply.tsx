import React from 'react';
import { formatDistance, subDays } from 'date-fns';
import CommentForm from './CommentForm.tsx';
import { ReplyType } from './Comment.types.ts';

type CommentProps = {
  reply: ReplyType;
  onUpdate: (_text: string) => void;
  onDelete: () => void;
};

const Reply: React.FC<CommentProps> = function ({ reply, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = React.useState(false);

  const fiveMinutes = 300000;

  // TODO: fix canDelete by applying some logic
  // const timePassed = new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes;
  const canDelete = true; // currentUserId === comment.userId && replies.length === 0 && !timePassed;
  // TODO: fix canEdit by applying some logic
  const canEdit = true; // currentUserId === comment.userId && !timePassed;

  const createdAtForOnHover = new Date(reply.createdAt).toLocaleDateString();
  const createdAt = formatDistance(subDays(new Date(reply.createdAt), 3), new Date(), { addSuffix: true });

  return (
    <div className="flex rounded-lg p-3 hover:bg-gray-200">
      <div className="avatar">
        <div className="m-2 h-12 w-12 rounded-full ">
          <img src={reply.creator.image} alt="User Avatar" />
        </div>
      </div>
      <div className="w-100%">
        <div className="flex">
          <div className="mr-2 text-lg text-gray-700">{reply.creator.username}</div>
          <div className="tooltip pt-2 text-xs text-gray-400" data-tip={createdAtForOnHover}>
            {createdAt}
          </div>
        </div>
        {isEditing ? (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={reply.body}
            onSubmit={(text) => {
              onUpdate(text);
              setIsEditing(false);
            }}
            handleCancel={() => {
              setIsEditing(false);
            }}
          />
        ) : (
          <div className="m-3 text-sm text-gray-600">{reply.body}</div>
        )}
        {canEdit && (
          <div className="mr-8" onClick={() => setIsEditing(true)} aria-hidden="true">
            Edit
          </div>
        )}
        {canDelete && (
          <div className="mr-8" onClick={() => onDelete()} aria-hidden="true">
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default Reply;
