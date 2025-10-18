import React from 'react';
import styles from './ColorDisplay.module.css';

interface ColorDisplayProps {
  color: string;
}

export const ColorDisplay: React.FC<ColorDisplayProps> = ({ color }) => {
  return (
    <div
      className={styles.colorDisplay}
      style={{ backgroundColor: color }}
      aria-label={`表示色: ${color}`}
    />
  );
};
