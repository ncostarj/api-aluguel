FROM node:latest

#
LABEL maintainer="Newton Gonzaga Costa<ncosta@proadv.com>" \      
  description="Imagem padrao para desenvolvimento web baseado em nginx"

#
VOLUME [ "/api" ]

#
WORKDIR /api

# Basic packages
RUN apt-get update && apt-get install -y --no-install-recommends \
  curl \
  vim \
  git \
  && rm -rf /var/lib/apt/lists/*

# installing libs
RUN npm i -g pm2 nodemon