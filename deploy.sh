#!/usr/bin/env bash

REPOSITORY=/home/ubuntu/client
cd $REPOSITORY

echo "> FE 배포"
sudo cp -rf * /var/www/html/ 