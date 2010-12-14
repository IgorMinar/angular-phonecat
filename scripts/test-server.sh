#!/bin/bash

base_dir=`dirname $0`
port=9876

echo "Starting JSTD server on port $port..."

java -jar "$base_dir/../test/lib/jstestdriver/JsTestDriver.jar" --port $port --browserTimeout 20000
