import React from 'react';
import Image from 'next/image';
import { MenuItemProps, defaultProps } from './RichTextEditor.types.ts';

const MenuItem: React.FC<MenuItemProps> = function ({ icon, title, action, isActive = defaultProps.isActive }) {
  return (
    <div className="tooltip tooltip-bottom" data-tip={title}>
      <button
        type="button"
        className={`btn menu-item${isActive && isActive() ? ' is-active' : ''}`}
        onClick={action}
        title={title}
      >
        <Image src={icon} alt={title} />
      </button>
    </div>
  );
};

MenuItem.defaultProps = defaultProps;

export default MenuItem;
