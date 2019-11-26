#!/usr/bin/env bash
yarn build
DOCKER_USER_NAME=$(node -pe 'JSON.parse(process.argv[1]).author.name' "$(cat package.json)")
DOCKER_IMAGE_NAME=$(node -pe 'JSON.parse(process.argv[1]).name' "$(cat package.json)")
DOCKER_IMAGE_VERSION=$(node -pe 'JSON.parse(process.argv[1]).version' "$(cat package.json)")
docker build . -t ${DOCKER_USER_NAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}
