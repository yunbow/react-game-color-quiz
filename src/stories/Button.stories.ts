import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'ゲーム開始',
    variant: 'primary',
    onClick: () => console.log('Primary button clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: '次の問題',
    variant: 'secondary',
    onClick: () => console.log('Secondary button clicked'),
  },
};

export const Warning: Story = {
  args: {
    children: 'もう一度プレイ',
    variant: 'warning',
    onClick: () => console.log('Warning button clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: '無効なボタン',
    disabled: true,
    onClick: () => console.log('Disabled button clicked'),
  },
};