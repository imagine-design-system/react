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

  return (
    <button
      className={`imagine-button ${
        danger ? 'danger' :
        neumorphic ? 'neumorphic' :
        secondary ? 'secondary' :
        success ? 'success' :
        warning ? 'warning' : 'primary'
      } ${outline ? 'outline' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
