import React from 'react'
import Image from 'next/image';

type MenuItemProps = {
  icon:string;
  title: string;
  action: () => void;
  isActive?: (() => boolean);
};
const MenuItem: React.FC<MenuItemProps> = ({ icon, title, action, isActive }) => (
  <div className="tooltip tooltip-bottom" data-tip={title}>
    <button
      className={`btn menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
    >
      <Image src={icon}   alt={title}/>
    </button>
  </div>
);

export default MenuItem;