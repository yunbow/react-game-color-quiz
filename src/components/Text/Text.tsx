import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'score' | 'timer' | 'result';
  isCorrect?: boolean;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  isCorrect,
  className
}) => {
  const getClassName = () => {
    let baseClass = `${styles.text} ${styles[variant]}`;

    if (variant === 'result' && isCorrect !== undefined) {
      baseClass += isCorrect ? ` ${styles.correct}` : ` ${styles.wrong}`;
    }

    if (className) {
      baseClass += ` ${className}`;
    }

    return baseClass;
  };

  const TagComponent = variant === 'title' ? 'h1' : variant === 'subtitle' ? 'h2' : 'p';

  return (
    <TagComponent className={getClassName()}>
      {children}
    </TagComponent>
  );
};
