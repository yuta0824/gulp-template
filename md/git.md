## git参考サイト
https://flex-box.net/git/

## リポジトリ作成
git init

## ステージ
git add .

## コミットメッセージ
git commit -m "cm"

## 直前のコミット前状態に戻す
git reset --soft HEAD^

## githubと連携する
githubにリモートリポジトリを作成
プライベートで作成
コードをコピーしてきて
ターミナルでコマンド叩く

## ローカルリポジトリでコミットしたものをリモートリポジトリにプッシュする
git push origin main

## develpブランチに移動する
git checkout develop

## 何か変更(& git commit)後...

## developブランチ（リモート）にpushする
git push origin develop