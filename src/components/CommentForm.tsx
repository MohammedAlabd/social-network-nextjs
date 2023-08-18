import React, { useState, ChangeEvent, FormEvent } from 'react';

type CommentFormProps = {
  handleSubmit: (text: string, parentId?: string | null) => void;
  submitLabel: string;
  hasCancelButton?: boolean;
  handleCancel?: () => void;
  initialText?: string;
};

const CommentForm: React.FC<CommentFormProps> = function ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) {
  const [text, setText] = useState(initialText);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(text);
    setText('');
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="textarea-bordered  textarea-sm mb-2 w-full  focus:outline-none"
        placeholder="Share your thoughts"
        value={text}
        onChange={onChange}
      />
      <button type="submit" className="btn-xs mr-2 bg-yellow-500 hover:bg-yellow-600" disabled={text.length === 0}>
        {submitLabel}
      </button>

      {hasCancelButton && (
        <button type="button" className="ghost btn-xs" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};
CommentForm.defaultProps = {
  hasCancelButton: false,
  handleCancel: () => {},
  initialText: '',
};
export default CommentForm;
