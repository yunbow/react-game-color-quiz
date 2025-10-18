import React from 'react';
import { ColorOption } from '../ColorOption';
import styles from './ColorOptions.module.css';

interface ColorOptionsProps {
  colors: string[];
  onColorSelect: (color: string) => void;
}

export const ColorOptions: React.FC<ColorOptionsProps> = ({ colors, onColorSelect }) => {
  return (
    <div className={styles.optionsContainer}>
      {colors.map((color, index) => (
        <ColorOption
          key={`${color}-${index}`}
          color={color}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
};
