#!/bin/bash
workingDir="/usr/project/koaServer"
buildDir="/usr/build/koaServer"
echo "Deploying to server..."
cp -rf $workingDir  $buildDir
if [ $? -eq 0 ]; then
  echo "Deployed successfully"
  exit 0
else
  echo "Failed to deploy"
  exit 1
fi
