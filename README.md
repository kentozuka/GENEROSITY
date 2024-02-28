# GENEROSITY

授業登録システムのモック

## システムのアクセス方法

1. [GENEROSITY](https://generosity.vercel.app)にアクセスする
2. 下記ユーザーを使ってログイン (授業登録以外は未ログインでも使用可能)
3. [授業の閲覧・登録](https://generosity.vercel.app/registered)、[パスワードの変更](https://generosity.vercel.app/password)が可能

```
メールアドレス：test@test.com
パスワード：test
```

```
メールアドレス：kentozuka@ruri.waseda.jp
パスワード：generosity
```

```
メールアドレス：anonymous@name.com
パスワード：anonymous
```

## 初期パスワードに戻す

上記のパスワードが使用できない場合は、[/api/auth/password](https://generosity.vercel.app/api/auth/password)にアクセスするか GET リクエストを行えば初期化されます。

## 作成内容

### 技術スタック

- フロントエンド：React (Next.js)
- バックエンド：Next.js
- データベース：PostgreSQL
- インフラ：Vercel

### 所要時間

約 28 時間（[Wakatime](https://wakatime.com/@6349807e-05ff-4de4-a2db-b1681b3c76c6/projects/zkhjrzzqzx?start=2024-02-22&end=2024-02-28)参照）

### 作成した機能

- パスワードの初期化機能
- 授業の検索機能
- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)を用いた授業表示
  (例: インスタグラムの投稿表示モーダルと URL に直接アクセスする際に異なる画面で表示される機能)
- スケルトンスクリーンを使用して検索の待ち時間を[不快に感じにくする UI](https://generosity.vercel.app/result)
- サーバーサイドコンポーネントとクライアントコンポーネントを用いたストレスのない UX

### 作成が間に合わなかったが、作りたかった機能

- レスポンシブ対応
- お気に入り機能
- 関連する授業を内容ごとにまとめる
- ユーザーの詳細入力
- ユーザーにおすすめの授業提案
- サムネイルの AI 生成

などなど

## 開発を始めるにあたって

### dependency のインストール

`npm i`

### 環境変数設定

`.env.local` を作成

```bash
touch .env.local
```

以下の内容を記入（Vercel の Storage タブからコピー）

- NEXTAUTH_SECRET
- POSTGRES_URL
- POSTGRES_PRISMA_URL
- POSTGRES_URL_NO_SSL
- POSTGRES_URL_NON_POOLING
- POSTGRES_USER
- POSTGRES_HOST
- POSTGRES_PASSWORD
- POSTGRES_DATABASE

### migration と seeding

- `npx prisma generate`で型生成
- `npm run db:migrate`でマイグレーション
- `npx prisma seed`でシードデータ挿入

### prisma client の生成

`npx prisma generate`を実行し、Prisma の型を生成

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
