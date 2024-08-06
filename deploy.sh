workingDir="/usr/project/"
buildDir="/usr/build/"
echo "Deploying to server..."
mv -f $buildDir/build/koaServer/dist  $workingDir/project/koaServer
if [ $? -eq 0 ]; then
  echo "Deployed successfully"
  exit 0
else
  echo "Failed to deploy"
  exit 1
fi
