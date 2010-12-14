#!/bin/bash

base_dir=`dirname $0`

echo "Starting JSTD server..."

java -jar "$base_dir/../test/lib/jstestdriver/JsTestDriver.jar" --port 9876 --browserTimeout 20000
