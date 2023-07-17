import React from 'react'

type MenuItemProps = {
  icon:JSX.Element;
  title: string;
  action: () => void;
  isActive?: (() => boolean) | null | undefined;
};
const MenuItem: React.FC<MenuItemProps> = ({ icon, title, action, isActive }) => (
  <div className="tooltip tooltip-bottom" data-tip={title}>
    <button
      className={`btn menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {icon}
      </svg>
    </button>
  </div>
);

export default MenuItem;