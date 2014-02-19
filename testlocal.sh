#!/bin/bash

php -S 0.0.0.0:8888 -t web &> /dev/null &
PID_HTTP=$!

phantomjs --webdriver=8643 &> /dev/null &
PID_BROWSER=$!

sleep 1

bin/behat

kill $PID_HTTP
kill $PID_BROWSER
