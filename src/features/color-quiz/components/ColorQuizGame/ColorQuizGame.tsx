import React from 'react';
import { Text } from '../../../../components/Text';
import { ColorDisplay } from '../ColorDisplay';
import { ColorOptions } from '../ColorOptions';
import { GameInfo } from '../GameInfo';
import { GameResult } from '../GameResult';
import { GameControls } from '../GameControls';
import { Instructions } from '../Instructions';
import { useColorQuiz } from '../../useColorQuiz';
import styles from './ColorQuizGame.module.css';

export const ColorQuizGame: React.FC = () => {
  const {
    gameState,
    gamePhase,
    showNextButton,
    result,
    isCorrect,
    startGame,
    nextQuestion,
    checkAnswer
  } = useColorQuiz();

  return (
    <div className={styles.container}>
      <Text variant="title">色当てゲーム</Text>

      {gamePhase === 'playing' && (
        <div className={styles.gameArea}>
          <ColorDisplay color={gameState.correctColor} />
          <ColorOptions
            colors={gameState.colors}
            onColorSelect={checkAnswer}
          />
          <GameResult result={result} isCorrect={isCorrect} />
          <GameInfo
            score={gameState.score}
            timeLeft={gameState.timeLeft}
          />
          <GameControls
            gamePhase={gamePhase}
            showNextButton={showNextButton}
            onStartGame={startGame}
            onNextQuestion={nextQuestion}
            onPlayAgain={startGame}
          />
        </div>
      )}

      {gamePhase === 'over' && (
        <div className={styles.gameOver}>
          <Text variant="subtitle">ゲーム終了</Text>
          <Text variant="body">あなたの最終スコア: {gameState.score}</Text>
          <GameControls
            gamePhase={gamePhase}
            showNextButton={showNextButton}
            onStartGame={startGame}
            onNextQuestion={nextQuestion}
            onPlayAgain={startGame}
          />
        </div>
      )}

      {gamePhase === 'ready' && (
        <GameControls
          gamePhase={gamePhase}
          showNextButton={showNextButton}
          onStartGame={startGame}
          onNextQuestion={nextQuestion}
          onPlayAgain={startGame}
        />
      )}

      <Instructions />
    </div>
  );
};
