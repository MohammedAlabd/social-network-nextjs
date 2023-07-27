import React from 'react';
import Image from 'next/image';

type MenuItemProps = {
  icon: string;
  title: string;
  action: () => void;
  // eslint-disable-next-line react/require-default-props
  isActive?: () => boolean;
};

const MenuItem: React.FC<MenuItemProps> = function ({ icon, title, action, isActive }) {
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

export default MenuItem;
