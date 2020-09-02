FROM node:7
MAINTAINER rolroralra <rolroralra@naver.com>

COPY app.js /app.js

ENTRYPOINT ["node", "app.js"]