import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'warning';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  style
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};
