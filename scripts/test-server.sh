#!/bin/bash

base_dir=`dirname $0`

echo "Starting JSTD server..."

java -jar "$base_dir/../lib-test/jstestdriver/JsTestDriver.jar" --port 9876 --browserTimeout 20000
