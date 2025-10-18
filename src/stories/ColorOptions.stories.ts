import type { Meta, StoryObj } from '@storybook/react';
import { ColorOptions } from '../features/color-quiz/components/ColorOptions';

const meta: Meta<typeof ColorOptions> = {
  title: 'ColorQuiz/ColorOptions',
  component: ColorOptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colors: [
      'rgb(255, 0, 0)',
      'rgb(0, 255, 0)',
      'rgb(0, 0, 255)',
      'rgb(255, 255, 0)',
      'rgb(255, 0, 255)',
      'rgb(0, 255, 255)',
    ],
    onColorSelect: (color: string) => console.log('Selected color:', color),
  },
};