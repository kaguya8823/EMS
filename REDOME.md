## mongo の入り方　と起動方法
ubuntu ->
 mongosh で起動
 ※rocketchat.mongodb は接続できなくてあきらめた。mongodb を新しく設定

 test> show dbs →　データベースの中身を確認できる

 test> show collections →　作った departments , employees , users, などが見れる
 　　　db.コレクション名.find() →　さらに内部の情報も見れる。確認できた。成功しているようだ
  ----------------------------------------------------------------------
## ターミナルでの起動方法
  frontend 内で npm run dev
  server 内で npm run start


> 各種ポートが利用しているもの
5173: フロントエンド（Vite）
3001: バックエンド API（Express）
27017: MongoDB 本体 (ubuntu mongosh)
