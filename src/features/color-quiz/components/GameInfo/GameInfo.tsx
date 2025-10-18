import React from 'react';
import { Text } from '../../../../components/Text';
import styles from './GameInfo.module.css';

interface GameInfoProps {
  score: number;
  timeLeft: number;
}

export const GameInfo: React.FC<GameInfoProps> = ({ score, timeLeft }) => {
  return (
    <div className={styles.gameInfo}>
      <Text variant="score">スコア: {score}</Text>
      <Text variant="timer">残り時間: {timeLeft}秒</Text>
    </div>
  );
};
