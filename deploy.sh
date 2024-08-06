#!/bin/bash
workingDir="/usr/project/koaServer"
buildDir="/usr/build/koaServer"
echo "Deploying to server..."
# 判断目录是否存在，如果不存在则创建目录
if [ ! -d "$buildDir" ]; then
  mkdir -p "$buildDir"
fi
cp -rf $workingDir  $buildDir >> /dev/null
if [ $? -eq 0 ]; then
  echo "Deployed successfully"
  exit 0
else
  echo "Failed to deploy"
  exit 1
fi
