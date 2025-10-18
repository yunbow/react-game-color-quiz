import { useState, useEffect, useCallback } from 'react';
import { GameState, GamePhase } from './types';
import { generateColors, calculateDifficulty } from './colorUtils';
import { Config } from '../../Config';

export const useColorQuiz = () => {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    timeLeft: Config.GAME_DURATION,
    isGameActive: false,
    correctColor: '',
    colors: [],
    gameOver: false
  });

  const [gamePhase, setGamePhase] = useState<GamePhase>('ready');
  const [showNextButton, setShowNextButton] = useState(false);
  const [result, setResult] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const startGame = useCallback(() => {
    const difficulty = calculateDifficulty(0);
    const colors = generateColors(Config.COLOR_OPTIONS_COUNT, difficulty);
    const correctIndex = Math.floor(Math.random() * colors.length);
    const correctColor = colors[correctIndex];

    setGameState({
      score: 0,
      timeLeft: Config.GAME_DURATION,
      isGameActive: true,
      correctColor,
      colors,
      gameOver: false
    });

    setGamePhase('playing');
    setShowNextButton(false);
    setResult('');
    setIsCorrect(undefined);
  }, []);

  const nextQuestion = useCallback(() => {
    if (gameState.timeLeft > 0) {
      const difficulty = calculateDifficulty(gameState.score);
      const colors = generateColors(Config.COLOR_OPTIONS_COUNT, difficulty);
      const correctIndex = Math.floor(Math.random() * colors.length);
      const correctColor = colors[correctIndex];

      setGameState(prev => ({
        ...prev,
        isGameActive: true,
        correctColor,
        colors
      }));

      setShowNextButton(false);
      setResult('');
      setIsCorrect(undefined);
    }
  }, [gameState.timeLeft, gameState.score]);

  const checkAnswer = useCallback((selectedColor: string) => {
    if (!gameState.isGameActive) return;

    if (selectedColor === gameState.correctColor) {
      setResult('正解！');
      setIsCorrect(true);
      setGameState(prev => ({
        ...prev,
        score: prev.score + 1,
        isGameActive: false
      }));
      setShowNextButton(true);
    } else {
      setResult('不正解！もう一度試してください');
      setIsCorrect(false);
      setGameState(prev => ({
        ...prev,
        timeLeft: Math.max(0, prev.timeLeft - Config.TIME_PENALTY)
      }));
    }
  }, [gameState.isGameActive, gameState.correctColor]);

  const endGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      isGameActive: false,
      gameOver: true
    }));
    setGamePhase('over');
    setShowNextButton(false);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (gameState.isGameActive && gameState.timeLeft > 0) {
      timer = setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, Config.TIMER_INTERVAL);
    } else if (gameState.timeLeft <= 0 && gamePhase === 'playing') {
      endGame();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [gameState.isGameActive, gameState.timeLeft, gamePhase, endGame]);

  return {
    gameState,
    gamePhase,
    showNextButton,
    result,
    isCorrect,
    startGame,
    nextQuestion,
    checkAnswer
  };
};
