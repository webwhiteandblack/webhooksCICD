#!/bin/bash
echo "\033[32m git pull \033[0m"
function echoCommand() {
  echo "\033[32m 执行命令: $1 \033[0m"
}
function pullFn() {
  cd $workingDir
  hasGit=$(which git) # 判断是否存在git
  if [ ! $hasGit ]; then
    echo "请先安装git"
    exit 1
  fi
  branch=""
  if branch=$(git symbolic-ref --short -q HEAD); then
    echo -e "\033[32m 当前分支名称$branch! \033[0m"
    echoCommand "git pull origin $branch"
    git pull origin $branch
  else
    echo -e "\033[31m 获取分支名失败! \033[0m"
    exit 0
  fi
}
