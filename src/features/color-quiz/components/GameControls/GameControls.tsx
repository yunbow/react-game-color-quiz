import React from 'react';
import { Button } from '../../../../components/Button';
import { GamePhase } from '../../types';
import styles from './GameControls.module.css';

interface GameControlsProps {
  gamePhase: GamePhase;
  showNextButton: boolean;
  onStartGame: () => void;
  onNextQuestion: () => void;
  onPlayAgain: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  gamePhase,
  showNextButton,
  onStartGame,
  onNextQuestion,
  onPlayAgain
}) => {
  return (
    <div className={styles.gameControls}>
      {gamePhase === 'ready' && (
        <Button onClick={onStartGame}>ゲーム開始</Button>
      )}

      {gamePhase === 'playing' && showNextButton && (
        <Button onClick={onNextQuestion} variant="secondary">
          次の問題
        </Button>
      )}

      {gamePhase === 'over' && (
        <Button onClick={onPlayAgain} variant="warning">
          もう一度プレイ
        </Button>
      )}
    </div>
  );
};
