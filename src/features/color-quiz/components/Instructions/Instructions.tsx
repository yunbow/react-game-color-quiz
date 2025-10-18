import React from 'react';
import { Text } from '../../../../components/Text';
import styles from './Instructions.module.css';

export const Instructions: React.FC = () => {
  return (
    <div className={styles.instructions}>
      <Text variant="subtitle">遊び方</Text>
      <Text variant="body">表示されたRGBカラーコードに一致する色を選んでください。</Text>
      <Text variant="body">正解すると1ポイント獲得します。制限時間は30秒です！</Text>
    </div>
  );
};
