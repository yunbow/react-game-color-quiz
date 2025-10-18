export interface GameState {
  score: number;
  timeLeft: number;
  isGameActive: boolean;
  correctColor: string;
  colors: string[];
  gameOver: boolean;
}

export interface ColorOption {
  color: string;
  onClick: () => void;
}

export type GamePhase = 'ready' | 'playing' | 'over';

export interface TimerProps {
  timeLeft: number;
}

export interface ScoreProps {
  score: number;
}

export interface ResultProps {
  result: string;
  isCorrect?: boolean;
}
