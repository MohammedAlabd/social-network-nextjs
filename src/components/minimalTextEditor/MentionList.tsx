import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { MentionListProps, MentionListRef } from './MiniamlTextEditor.Types.ts';

const MentionList = forwardRef<MentionListRef, MentionListProps>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectItem = (index: number) => {
    const { items } = props;
    const item = items[index];

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    handleSelectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ key }) => {
      if (key === 'ArrowUp') {
        upHandler();
        return true;
      }

      if (key === 'ArrowDown') {
        downHandler();
        return true;
      }

      if (key === 'Enter') {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="items">
      {props.items.length ? (
        props.items.map((item, index) => (
          <button
            type="button"
            className={`item ${index === selectedIndex ? 'is-selected' : ''}`}
            key={index}
            onClick={() => handleSelectItem(index)}
          >
            {item}
          </button>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </div>
  );
});

export default MentionList;
