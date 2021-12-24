#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
cd ${APPCENTER_SOURCE_DIRECTORY}
echo "CODEPUSH_KEY_IOS=${CODEPUSH_KEY_IOS}" > .env
echo "CODEPUSH_KEY_ANDROID=${CODEPUSH_KEY_ANDROID}" >> .env
echo "SECRET_IOS=${SECRET_IOS}" >> .env
echo "SECRET_ANDROID=${SECRET_ANDROID}" >> .env

touch ./android/app/src/main/assets/appcenter-config.json
echo "{ \n \"app_secret\":$SECRET_ANDROID \n }" >> "./android/app/src/main/assets/appcenter-config.json"
