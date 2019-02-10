#!/usr/bin/env bash

docker build -t obs-dynamic-overlay .
docker run -d -p 8080:80 --name myapp obs-dynamic-overlay
docker logs --follow myapp
docker rm myapp