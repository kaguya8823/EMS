## mongo の入り方　と起動方法
ubuntu ->
 cd /tmp
 sudo rocketchat-server.mongo
  > test> に入れるので、以下を入力
    show dbs

  // 中身
  admin
  config
  local
  parties

　> use parties // rocket.chatが使っているデータベース内部を直接見れる

  > use ems
  > show collections // 中身
  > db.users.find() // 登録されているユーザーデータを見る

  ----------------------------------------------------------------------
## ターミナルでの起動方法
  frontend 内で npm run dev
  server 内で npm run start


メモ---------------------------------------------------------------------
 > mongoDB の起動について
 ubuntu にて以下のコマンドで起動
 sudo systemctl start snap.rocketchat-server.rocketchat-mongo.service

 サービスの停止
 sudo systemctl stop snap.rocketchat-server.rocketchat-mongo.service

mongoの状態確認
sudo systemctl status snap.rocketchat-server.rocketchat-mongo.service

> 各種ポートが利用しているもの
5173: フロントエンド（Vite）
3001: バックエンド API（Express）
27017: MongoDB 本体