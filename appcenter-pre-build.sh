#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
cd ${APPCENTER_SOURCE_DIRECTORY}
echo "BASE_URL=${BASE_URL}" > .env
echo "FAQ_URL=${FAQ_URL}" >> .env

touch ./android/app/src/main/assets/appcenter-config.json
echo "{ \n \"app_secret\":$ANDROID_SECRET \n }" >> "./android/app/src/main/assets/appcenter-config.json"
