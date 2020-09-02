FROM node:7
MAINTAINER rolroralra <rolroralra@naver.com>

ADD app.js /app.js

ENTRYPOINT ["node", "app.js"]