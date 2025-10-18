import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['title', 'subtitle', 'body', 'score', 'timer', 'result'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: '色当てゲーム',
    variant: 'title',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'ゲーム終了',
    variant: 'subtitle',
  },
};

export const Body: Story = {
  args: {
    children: '表示されたRGBカラーコードに一致する色を選んでください。',
    variant: 'body',
  },
};

export const Score: Story = {
  args: {
    children: 'スコア: 5',
    variant: 'score',
  },
};

export const Timer: Story = {
  args: {
    children: '残り時間: 15秒',
    variant: 'timer',
  },
};

export const ResultCorrect: Story = {
  args: {
    children: '正解！',
    variant: 'result',
    isCorrect: true,
  },
};

export const ResultWrong: Story = {
  args: {
    children: '不正解！もう一度試してください',
    variant: 'result',
    isCorrect: false,
  },
};