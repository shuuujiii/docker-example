#!/bin/bash
# chmod 755 sample.sh
#docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
dev-up() {
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
}

testB() {
  echo "TEST B $2";
}

"$@"