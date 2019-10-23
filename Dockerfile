FROM node:10

WORKDIR /src

COPY ./ /src

VOLUME /src

EXPOSE 8000

CMD ["node", "."]
