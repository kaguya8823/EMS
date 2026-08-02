# DBは公式イメージをそのまま使うことが多いため、基本は Dockerfile 不要です。
# 初期データを投入したい場合のみ、以下のように設定します。
FROM postgres:15-alpine
# 初期化用のSQLファイルを配置する場合（コンテナ起動時に自動実行されます）
COPY ./init.sql /docker-entrypoint-initdb.d/
EXPOSE 5432