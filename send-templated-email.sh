#!/bin/bash

if [[ "$1" == "" ]]; then
  echo "Missing email filename"
  exit 1
fi

aws ses send-templated-email --cli-input-json "file://$1"
