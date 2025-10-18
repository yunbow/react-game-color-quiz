# 色当てゲーム (TypeScript + React + Storybook)

React 18とTypeScriptで構築された色当てゲームです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-color-quiz/demo/

## 主要機能

### 操作方法
- **ゲーム開始ボタン**: ゲームを開始
- **色選択**: 表示された色に対応する選択肢をクリック
- **次の問題ボタン**: 正解後に次の問題へ進む
- **もう一度プレイボタン**: ゲーム終了後に再開

### ゲーム機能
- RGBカラーの色当てゲーム
- 30秒の制限時間
- リアルタイムスコア表示
- 6つの選択肢から正解を選択
- 正解・不正解の判定表示
- スコアに応じた難易度調整（類似色の生成）

## ゲーム仕様
- **制限時間**: 30秒
- **選択肢数**: 6個
- **スコア**: 正解ごとに1ポイント
- **ペナルティ**: 不正解で残り時間-3秒
- **色生成**: ランダムRGB値 (0-255)
- **難易度**: スコアに応じて段階的に上昇

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                    # 機能別モジュール
│   └── color-quiz/              # 色当てクイズ機能
│       ├── components/          # 機能専用コンポーネント
│       │   ├── ColorOption/     # 色選択ボタン
│       │   ├── ColorDisplay/    # 色表示エリア
│       │   ├── ColorOptions/    # 色選択肢群
│       │   ├── GameInfo/        # スコア・タイマー表示
│       │   ├── GameResult/      # 結果表示
│       │   ├── GameControls/    # ゲーム操作ボタン
│       │   ├── Instructions/    # 遊び方説明
│       │   └── ColorQuizGame/   # ゲーム全体
│       ├── useColorQuiz.ts      # ゲームロジックフック
│       ├── colorUtils.ts        # 色生成ユーティリティ
│       └── types.ts             # 機能固有の型定義
├── components/                  # 共通UIコンポーネント
│   ├── Button/                  # 操作ボタン
│   └── Text/                    # テキスト表示
├── stories/                     # Storybook用ストーリー
├── Config.ts                    # 設定値
├── App.tsx                      # メインアプリ
└── main.tsx                     # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License