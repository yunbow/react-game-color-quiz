import React from 'react';
import { Text } from '../../../../components/Text';
import styles from './GameResult.module.css';

interface GameResultProps {
  result: string;
  isCorrect?: boolean;
}

export const GameResult: React.FC<GameResultProps> = ({ result, isCorrect }) => {
  if (!result) return <div className={styles.gameResult} />;

  return (
    <div className={styles.gameResult}>
      <Text variant="result" isCorrect={isCorrect}>
        {result}
      </Text>
    </div>
  );
};
