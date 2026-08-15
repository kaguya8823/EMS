## mongo の入り方
ubuntu ->
 cd /tmp
 sudo rocketchat-server.mongo
  > test show dbs

  // 中身
  admin
  config
  local
  parties

　> use parties // rocket.chatが使っているデータベース内部を直接見れる

  > use ems
  > show collections // 中身
  > db.users.find() // 登録されているユーザーデータを見る

  frontend 内で npm run dev
  server 内で npm run start

