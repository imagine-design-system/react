import React from 'react';
import './Button.scss';

interface IButton {
  danger?: boolean;
  neumorphic?: boolean;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
}

export const Button: React.FC<IButton> = ({
  children,
  danger,
  neumorphic,
  onClick,
  outline,
  secondary,
  success,
  warning
}) => {

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - btn.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = btn.querySelectorAll('.ripple')[0];
    if(ripple){
      ripple.remove()
    };
    btn.appendChild(circle);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(onClick){
      onClick(e);
    }
    if(!e.currentTarget.className.includes('neumorphic')){
      createRipple(e);
    }
  }

  return (
    <button
      className={`imagine-button ${
        danger ? 'danger' :
        neumorphic ? 'neumorphic' :
        secondary ? 'secondary' :
        success ? 'success' :
        warning ? 'warning' : 'primary'
      } ${
        outline ? 'outline' :
        neumorphic ? 'neumorphic' : ''
      }`}
      onClick={e => handleClick(e)}
    >
      {children}
    </button>
  );
};
