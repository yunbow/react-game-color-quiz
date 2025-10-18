export const generateRandomColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// スコアから難易度(0-1)を計算
export const calculateDifficulty = (score: number): number => {
  // スコア5ごとに難易度が上がる（最大0.95）
  return Math.min(0.95, score * 0.1);
};

// 類似色を生成（難易度が高いほど元の色に近い色を生成）
const generateSimilarColor = (baseColor: string, difficulty: number): string => {
  const rgbMatch = baseColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!rgbMatch) return generateRandomColor();

  const [, r, g, b] = rgbMatch.map(Number);

  // 難易度に応じて変化幅を調整（難易度が高いほど変化が小さい）
  const maxVariation = Math.floor(128 * (1 - difficulty));

  const newR = Math.max(0, Math.min(255, r + (Math.random() * maxVariation * 2 - maxVariation)));
  const newG = Math.max(0, Math.min(255, g + (Math.random() * maxVariation * 2 - maxVariation)));
  const newB = Math.max(0, Math.min(255, b + (Math.random() * maxVariation * 2 - maxVariation)));

  return `rgb(${Math.floor(newR)}, ${Math.floor(newG)}, ${Math.floor(newB)})`;
};

export const generateColors = (numColors: number, difficulty: number = 0): string[] => {
  const correctColor = generateRandomColor();
  const colorArray: string[] = [correctColor];

  // 難易度に応じて類似色を生成
  for (let i = 1; i < numColors; i++) {
    if (difficulty > 0) {
      colorArray.push(generateSimilarColor(correctColor, difficulty));
    } else {
      colorArray.push(generateRandomColor());
    }
  }

  // 配列をシャッフル
  for (let i = colorArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorArray[i], colorArray[j]] = [colorArray[j], colorArray[i]];
  }

  return colorArray;
};
