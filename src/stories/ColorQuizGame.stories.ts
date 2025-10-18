import type { Meta, StoryObj } from '@storybook/react';
import { ColorQuizGame } from '../features/color-quiz/components/ColorQuizGame';

const meta: Meta<typeof ColorQuizGame> = {
  title: 'ColorQuiz/ColorQuizGame',
  component: ColorQuizGame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};