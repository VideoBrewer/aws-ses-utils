#!/bin/bash

if [[ "$1" == "" ]]; then
  echo "Missing config filename"
  exit 1
fi

aws ses create-template --cli-input-json "file://$1"
