#!/bin/sh

base_dir=`dirname $0`

tests=$1
if [[ $tests = "" ]]; then
  tests="all"
fi

java -jar "$base_dir/../lib-test/jstestdriver/JsTestDriver.jar" --tests "$tests"
