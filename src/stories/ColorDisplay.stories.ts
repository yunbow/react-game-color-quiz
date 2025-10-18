import type { Meta, StoryObj } from '@storybook/react';
import { ColorDisplay } from '../features/color-quiz/components/ColorDisplay';

const meta: Meta<typeof ColorDisplay> = {
  title: 'ColorQuiz/ColorDisplay',
  component: ColorDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    color: 'rgb(255, 0, 0)',
  },
};

export const Blue: Story = {
  args: {
    color: 'rgb(0, 0, 255)',
  },
};

export const Green: Story = {
  args: {
    color: 'rgb(0, 255, 0)',
  },
};

export const RandomColor: Story = {
  args: {
    color: 'rgb(123, 45, 200)',
  },
};