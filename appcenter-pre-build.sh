#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env
printf "\n.env created with contents:\n\n"
cat .env

touch ./android/app/src/main/assets/appcenter-config.json
echo "{ \n \"app_secret\":$ANDROID_SECRET \n }" >> "./android/app/src/main/assets/appcenter-config.json"
