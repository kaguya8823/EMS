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

  さらに、
  > show collections // 中身