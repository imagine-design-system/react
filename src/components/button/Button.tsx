import React from 'react';
import './Button.scss';

interface IButton {
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButton> = ({children, onClick}) => {

  return (
    <button
      className={`gin-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
