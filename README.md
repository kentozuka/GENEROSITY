# GENEROSITY 提出課題

## 技術スタック

- フロントエンド：React (Next.js)
- バックエンド：Next.js
- データベース：PostgreSQL
- インフラ：Vercel

## 作成にかかった時間

約 時間（[Wakatime](https://wakatime.com/@6349807e-05ff-4de4-a2db-b1681b3c76c6/projects/zkhjrzzqzx?start=2024-02-15&end=2024-02-21)参照）

## 始めるにあたって

### dependency のインストール

`npm i`

### 環境変数設定

`.env.local` を作成

```bash
touch .env.local
```

以下の内容を記入（Vercel の Storage タブからコピー）

- POSTGRES_URL
- POSTGRES_PRISMA_URL
- POSTGRES_URL_NO_SSL
- POSTGRES_URL_NON_POOLING
- POSTGRES_USER
- POSTGRES_HOST
- POSTGRES_PASSWORD
- POSTGRES_DATABASE

### migration と seeding

1. `npx prisma generate`で型生成
1. `npm run db:push`でテーブル作成
1. `npx prisma seed`でシードデータ挿入

### prisma client の生成

`npx prisma generate`を実行し、Prisma の型を生成する（ORM を使った開発時に必須）

## 課題詳細

### 課題概要

- 大学生が新学期に受講登録するためのプラットフォーム
- 半期（前期・後期）ごとに受講登録ができる
- 登録した講義の一覧が閲覧可能
- 事前に登録されたユーザーごとに受講登録ができる
- ユーザーパスワードの変更が可能

### 機能要件

1. ユーザー認証

   - ログイン
   - パスワード変更

1. 受講登録

   - 授業一覧表示
   - 受講授業の選択・登録
   - 受講授業の修正・削除

1. 授業情報の閲覧

   - 受講登録した授業の一覧
   - 授業詳細情報
