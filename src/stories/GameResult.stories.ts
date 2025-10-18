import type { Meta, StoryObj } from '@storybook/react';
import { GameResult } from '../features/color-quiz/components/GameResult';

const meta: Meta<typeof GameResult> = {
  title: 'ColorQuiz/GameResult',
  component: GameResult,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Correct: Story = {
  args: {
    result: '正解！',
    isCorrect: true,
  },
};

export const Wrong: Story = {
  args: {
    result: '不正解！もう一度試してください',
    isCorrect: false,
  },
};

export const Empty: Story = {
  args: {
    result: '',
  },
};