import React from 'react';
import { ColorOption as ColorOptionType } from '../../types';
import styles from './ColorOption.module.css';

export const ColorOption: React.FC<ColorOptionType> = ({ color, onClick }) => {
  return (
    <button
      className={styles.colorOption}
      style={{ backgroundColor: color }}
      onClick={onClick}
      aria-label={`色を選択: ${color}`}
    />
  );
};
