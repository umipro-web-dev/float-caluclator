#!/bin/bash

pass=`pwd`


npx eslint "$pass/src/**/*"

code=$?

if [ $code -eq 0 ]; then
	echo "Linting has been successful!!!"
	exit 0
else
	exit $code
fi

