import type { Meta, StoryObj } from '@storybook/react';
import { GameInfo } from '../features/color-quiz/components/GameInfo';

const meta: Meta<typeof GameInfo> = {
  title: 'ColorQuiz/GameInfo',
  component: GameInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 5,
    timeLeft: 15,
  },
};

export const HighScore: Story = {
  args: {
    score: 20,
    timeLeft: 5,
  },
};

export const TimeUp: Story = {
  args: {
    score: 3,
    timeLeft: 0,
  },
};