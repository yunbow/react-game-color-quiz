import type { Meta, StoryObj } from '@storybook/react';
import { ColorOption } from '../features/color-quiz/components/ColorOption';

const meta: Meta<typeof ColorOption> = {
  title: 'ColorQuiz/ColorOption',
  component: ColorOption,
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
    onClick: () => console.log('Red color selected'),
  },
};

export const Blue: Story = {
  args: {
    color: 'rgb(0, 0, 255)',
    onClick: () => console.log('Blue color selected'),
  },
};

export const Green: Story = {
  args: {
    color: 'rgb(0, 255, 0)',
    onClick: () => console.log('Green color selected'),
  },
};

export const Purple: Story = {
  args: {
    color: 'rgb(128, 0, 128)',
    onClick: () => console.log('Purple color selected'),
  },
};